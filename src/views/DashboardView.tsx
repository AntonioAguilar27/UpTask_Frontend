import { Link } from "react-router-dom"
import { useQuery } from '@tanstack/react-query'
import { getProjects } from "@/api/ProjectAPI"

export default function DashboardView() {


  const { data, isLoading } = useQuery({
    queryKey: ['projects'],
    queryFn: getProjects
  })
  console.log(data)
  if (isLoading) return 'Cargando'


  if (data)return (
    <>
      <h1 className="text-5xl font-black">Mis proyectos</h1>
      <p className="text-2xl font-light text-gray-500 mt-5">Manjea y optimiza tus proyectos</p>
      <nav className="my-5">
        <Link
          className="bg-purple-400 hover:bg-purple-500 px-10 py-3 text-white text-xl font-bold cursor-pointer transtition-colors"
          to='/projects/create'
        >Nuevo proyecto</Link>
      </nav>

      {data.length ?(
        <p>si hay proyectos</p>
      ):(
        <p className="text-center py-20">no hay proyectos
          <Link
            to={'/projects/create'}
            className="text-fuchsia-500 font-bold"
          
          > Crear Proyecto6</Link>
        </p>
      )} 

    </>
  )
}
 


