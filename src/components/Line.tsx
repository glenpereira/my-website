type LineProps = {
  action: string | null;
}

function Line({action}:LineProps) {
  return (
    <div>
      <svg
        width="56"
        height="4"
        viewBox="0 0 56 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`fill-slate-50/50 scale-50 ${!action ? "" : "fill-slate-50/90"}`}
      >
        <path d="M0 1.72125C0 0.770638 0.770638 0 1.72125 0H53.3588C54.3092 0 55.08 0.770638 55.08 1.72125C55.08 2.67186 54.3092 3.4425 53.3588 3.4425H1.72125C0.770638 3.4425 0 2.67186 0 1.72125Z" />
      </svg>
    </div>
  );
}

export default Line
