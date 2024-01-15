


import Nav from '@/Components/Nav'
import './globals.css'
import Footer from '@/Components/Footer'



export const metadata = {
  title: 'Ayesha Spa and Saloon',
  description: 'Ayesha spa and Fatima Maid Services.',
}


export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
     
      <body >
        <Nav/>
        {children}
        <Footer/>
        
        </body>
    </html>
  )
}
