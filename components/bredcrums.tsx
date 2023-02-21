// import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTheme } from '@emotion/react';



function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function BasicBreadcrumbs() {
  const router = useRouter()
  const {id} = router.query
  const routes = router.asPath.split('/')
  let root = ''
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link href="/">Home</Link>
        {routes.map((route,index)=>{
          root = ''
          for (var i = 0; i <= index; i++) {
            if (i===0){
              root += routes[i]
            }else{
              root += "/"+routes[i]

            }
          }
          console.log(root)
          if (route !== ''){
              //console.log(route)
            return(
              <Link href={root} key={index} onClick={(e)=>console.log(e.target)}>{route}</Link>
              
            )
          }
        })}
      </Breadcrumbs>
    </div>
  );
}