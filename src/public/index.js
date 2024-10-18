feather.replace();

window.computers = [];

window.liveFeedEnabled = true;

const liveFeedAlert = $('#liveFeedAlert');
const wakeCountCompleted = $('#wakeCountCompleted');
const wakeCountTotal = $('#wakeCountTotal');
const wakeAllButton = $('#wakeAllButton');
const computerCount = $('#computerCount');

// Assign click handlers
wakeAllButton.click(wakeAllComputers);

function getComputers() {
  fetch('/api/computer')
    .then(response => response.json())
    .then(data => {
      processComputers(data);
    });
}

function processComputers(computers) {
  window.computers = computers;

  if (!window.liveFeedEnabled) return;

  computerCount.text(computers.length);
  const table = $('#tableBody');
  table.empty();
  
  computers.forEach(computer => {
    const row = $("<tr></tr>");
    const name = $("<td></td>");
    const lastContact = $("<td></td>");
    const power = $("<td></td>");
    const lastIp = $("<td></td>");
    const onEthernet = $("<td></td>");
    const mac = $("<td></td>");
    const actions = $("<td></td>");

    name.text(computer.hostname);
    const contactDate = new Date(computer.lastContact);
    lastContact.text(`${contactDate.toLocaleDateString()} ${contactDate.toLocaleTimeString()}`);

    if (computer.power === undefined) {
      power.html('<span class="rounded bg-warning text-black ps-2 pe-2">Unknown</span>');
    } else {
      power.html((computer.power) ? '<span class="rounded bg-success ps-2 pe-2">Powered On</span>' : '<span class="rounded bg-danger text-light ps-2 pe-2">Powered Off</span>');
    }
    
    lastIp.html((computer.ipAddress == null || computer.ipAddress == "") ? '<span class="rounded bg-warning text-black ps-2 pe-2">Unknown IP</span>' : `<code class="text-light">${computer.ipAddress}</code>`);
    onEthernet.html((computer.address !== "") ? '<span class="rounded bg-success ps-2 pe-2">Ethernet</span>' : '<span class="rounded bg-warning text-black ps-2 pe-2">On Wi-Fi</span>');
    mac.html((computer.address !== "") ? `<code class="text-light">${computer.address}</code>` : '<span class="rounded bg-warning text-black ps-2 pe-2">Unknown MAC</span>');

    const wakeButton = $("<button class='btn btn-primary btn-sm p-0 ps-2 pe-2 me-2'>Wake</button>");
    const deleteButton = $("<button class='btn btn-danger btn-sm p-0 ps-2 pe-2'>Delete</button>");
    wakeButton.click(() => wakeComputer(computer._id));
    deleteButton.click(() => deleteComputer(computer._id, row, deleteButton));

    actions.append(wakeButton);
    actions.append(deleteButton);

    row.append(name);
    row.append(lastContact);
    row.append(power);
    row.append(lastIp);
    row.append(onEthernet);
    row.append(mac);
    row.append(actions);
    table.append(row);
    console.log("Added row");
  });

  const sortedHeader = $(".sorttable_sorted")[0];
  const reverseSortedHeader = $(".sorttable_sorted_reverse")[0];

  if (sortedHeader !== undefined) {
    sorttable.innerSortFunction.apply(sortedHeader, []);
    sorttable.innerSortFunction.apply(sortedHeader, []);
  } else if (reverseSortedHeader !== undefined) {
    sorttable.innerSortFunction.apply(reverseSortedHeader, []);
    sorttable.innerSortFunction.apply(reverseSortedHeader, []);
  }
}

setInterval(getComputers, 5000);
getComputers();

function wakeComputer(id, cb) {
  fetch(`/api/computer/${id}/wake`)
    .then(response => {
      if (response.ok) {
        console.log('Computer woken');
        if (cb) cb();
      } else {
        alert('Failed to wake computer');
        console.error('Failed to wake computer');
      }
    });
}

function deleteComputer(id, row, button) {
  button.addClass('disabled');
  if (!confirm(`Delete computer ${window.computers.find(c => c._id === id).hostname} from database?`)) return;
  fetch(`/api/computer/${id}`, { method: 'DELETE' })
    .then(response => {
      if (response.ok) {
        console.log('Computer deleted');
        row.remove();
        getComputers();
      } else {
        alert('Failed to delete computer');
        console.error('Failed to delete computer');
        button.removeClass('disabled');
      }
    });
}

function wakeAllComputers() {
  const count = window.computers.filter(c => c.address !== "").length;
  let completed = 0;

  wakeCountCompleted.text(0);
  wakeCountTotal.text(count);

  window.computers.forEach(computer => {
    if ((computer.address === "")) return;
    
    wakeComputer(computer._id, () => {
      completed++;
      wakeCountCompleted.html(completed);
    });
  });
}

function disableLiveFeed() {
  if (!window.liveFeedEnabled) return;
  window.liveFeedEnabled = false;
  liveFeedAlert.removeClass('d-none');
}

function enableLiveFeed() {
  if (window.liveFeedEnabled) return;
  window.liveFeedEnabled = true;
  liveFeedAlert.addClass('d-none');
  processComputers(window.computers);
}

$("#enableLiveFeedButton").click(enableLiveFeed);

$("#dataTableHeader > tr > th").not(".sorttable_nosort").click(function() {
  sorttable.innerSortFunction.apply(this, []);
  sorttable.innerSortFunction.apply(this, []);
  disableLiveFeed();
});