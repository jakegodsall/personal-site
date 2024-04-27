export default function Footer() {
  return (
    <footer className="flex flex-col items-center bg-grey-primary p-[1rem]">
      <p className="text-[1.2rem] text-grey-500">
        &copy; {new Date().getFullYear()} - Jake Godsall
      </p>
    </footer>
  );
}
