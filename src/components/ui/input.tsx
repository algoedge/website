interface InputProps {
  type: string
  required?: boolean
}

export default function Input({ type, required }: InputProps) {
  return (
    <input
      className="border p-2 w-full"
      type={type}
      required={required}
    />
  )
}
