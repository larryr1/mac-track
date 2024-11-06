import { useRecoilValue } from "recoil"
import { ToastDisplayStateAtom } from "../../atoms/overlay/ToastDisplayState"
import { Toast, ToastContainer } from "react-bootstrap";



export const ToastDisplay = () => {

  const displayState = useRecoilValue(ToastDisplayStateAtom);

  return (
    <ToastContainer style={{ position: "fixed", bottom: 0, right: 0, margin: "1em" }}>
      {displayState.toasts.map((toast) => (
        <Toast key={toast.id} autohide={true} delay={toast.delay} show={true} bg={toast.variant}>
          <Toast.Header closeButton={false}>
            <strong className="me-auto">{toast.title} {toast.id}</strong>
          </Toast.Header>
          <Toast.Body>{toast.message}</Toast.Body>
        </Toast>
      ))}
    </ToastContainer>
  )
}