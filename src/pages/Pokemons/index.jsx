// **** dependencies **** //
// import PropTypes from 'prop-types'
// import { useState } from 'react';
import { useQuery } from '@tanstack/react-query'

import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

import { getDitto } from '@apis/Pokemons';

import { boxContainerPaperColor } from '@constants/Styles';

import Search from '@components/Pokemons/Card/Search';
import Paginate from '@components/Pokemons/Card/Paginate';
import Card from '@components/Pokemons/Card';

const queryKey = 'pokelist'
function Pokemons() {
  // const [ paginate, setPaginate ] = useState(0);
  const { result, isError, isLoading } = useQuery( {
    queryKey: [ queryKey ],
    queryFn: queryFnAsync,
  } )

  async function queryFnAsync() {
    try {
        const { content = [] } = await getDitto()
        console.log(content);
        return content
    } catch ( error ) {
        console.error( error?.response || error?.message )
        const message = 'ah ocurrido un error inesperado'
        throw new Error( message )
    }
}
  if(isLoading){
    return(
      <CircularProgress color="secondary" />
    )
  }

  if(!isLoading && isError) {
    return(
      <Box>No se encontro</Box>
    )
  }

  console.log(result);

  return (
    <Box sx={boxContainerPaperColor}>
      <Search />
      {
        result.abilities.map((item) => (
          <Card key={item.id} result={result} />
        ))
      }
      <Paginate />
    </Box>
  )
}

Pokemons.propTypes = {}

export default Pokemons
