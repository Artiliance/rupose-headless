import { toast } from 'sonner'

export const toastSuccess = (message: string) =>
  toast.success(message, {
    duration: 3000,
    position: 'bottom-right',
  })

export const toastError = (message: string) =>
  toast.error(message, {
    duration: 4000,
    position: 'bottom-right',
  })

export const toastInfo = (message: string) =>
  toast(message, {
    duration: 3000,
    position: 'bottom-right',
  })
