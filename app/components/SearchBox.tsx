// components/SearchBox.tsx
"use client";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBox({ value, onChange }: Props) {
  return (
    <div className="mb-8">
      <input
        type="text"
        placeholder="タイトルで検索"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={(e) => onChange(value.trim())}
        className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
