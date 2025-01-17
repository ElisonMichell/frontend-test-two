import React, { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export const RouteContext = createContext(undefined)

export function RouteContextProvider({ children }) {
  const [ menuOpen, setMenuOpen ] = useState(false);
  const [currentRoute, setCurrentRoute] = useState("");
  const [lastRoute, setLastRoute] = useState("");
  const router = useRouter();

  useEffect(() => {
    setLastRoute(currentRoute);
    setCurrentRoute(router.route)
  }, [router.route])

  const backRoute = () => {
    router.push(lastRoute);
  }

  const toPokemonLink = (name) => {
    router.push({
      pathname: '/pokemon',
      query: { pokemon: name },
    }, `/pokemon/${name}`)
  };

  return (
    <RouteContext.Provider value={{currentRoute, router, toPokemonLink, backRoute, menuOpen, setMenuOpen}}>
      {children}
    </RouteContext.Provider>
  );
}