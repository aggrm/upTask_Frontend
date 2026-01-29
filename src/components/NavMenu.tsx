import { Popover, PopoverButton, PopoverPanel, Transition } from '@headlessui/react'
import { Bars3Icon } from '@heroicons/react/20/solid'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import type { User } from '../types'
import { useQueryClient } from '@tanstack/react-query'

type NavMenuProps = {
  name: User['name']
}

export default function NavMenu({name} :  NavMenuProps) {
    
    const queryClient = useQueryClient()
    const logout = () => {
      localStorage.removeItem('AUTH_TOKEN')
      queryClient.invalidateQueries({queryKey: ['user']})
    }
    
    return (
      <Popover className="relative">
        <PopoverButton className="inline-flex items-center rounded-lg bg-purple-400 p-1">
          <Bars3Icon className="h-8 w-8 text-white" />
        </PopoverButton>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-2"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-2"
        >
          <PopoverPanel className="absolute right-0 z-10 mt-4 w-56">
            <div className="rounded-xl bg-white p-4 text-sm font-semibold text-gray-900 shadow-lg ring-1 ring-gray-900/5">
              <p className="mb-2 text-center">Hola: {name}</p>

              <Link
                to="/profile"
                className="block rounded-lg p-2 hover:bg-purple-50 hover:text-purple-900"
              >
                Mi Perfil
              </Link>

              <Link
                to="/"
                className="block rounded-lg p-2 hover:bg-purple-50 hover:text-purple-900"
              >
                Mis Proyectos
              </Link>

              <button
                type="button"
                className="block w-full rounded-lg p-2 text-left hover:bg-purple-50 hover:text-purple-900"
                onClick={logout}
              >
                Cerrar sesión
              </button>
            </div>
          </PopoverPanel>
        </Transition>
      </Popover>
    )
}
