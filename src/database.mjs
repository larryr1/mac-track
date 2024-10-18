import Nedb from "@seald-io/nedb";

export const Computers = new Nedb({ autoload: true, filename: "computers.db" });
Computers.setAutocompactionInterval(30000);