export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div id="layout" className="h-full flex justify-center items-center">
      {children}
    </div>
  )
}
