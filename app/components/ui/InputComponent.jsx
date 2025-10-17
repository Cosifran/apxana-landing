'use client';
export default function InputComponent({
  label = "",
  type = "text",
  placeholder = "",
  value = "",
  onChange = () => {},
  id = "",
}) {
  return (
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full pl-5 pr-4 py-3 rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary border-2 border-border hover:border-primary/50 transition-all duration-200 text-base"
      aria-label={label}
    />
  );
}
