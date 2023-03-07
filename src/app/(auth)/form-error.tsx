type FormErrorProps = {
  message: string | undefined;
}

export default function FormError({ message }: FormErrorProps) {
  return (
    <div className="text-yellow-300">⚠️ {message}</div>
  );
}