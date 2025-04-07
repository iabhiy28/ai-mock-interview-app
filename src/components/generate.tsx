import { Outlet } from "react-router-dom"

const Generate = () => {

  return (
    <div className="min-h-screen flex flex-col md">
      <main className="flex-1 md:px-12">
        <Outlet />
      </main>
    </div>
  );
}

export default Generate