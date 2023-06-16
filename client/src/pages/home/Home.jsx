import { useState, useEffect } from 'react';

import { Loader, Card, FormField } from '../../components';

const RenderCards = ({ data, title }) => {
  if (data?.length > 0) {
    return data.map(post => <Card key={post._id} {...post} />)
  }

  return (
    <h2 className='mt-5 font-bold text-[#6449ff] text-xl uppercase'>
      { title }
    </h2>
  )
}

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);
  const [searchText, setSearchText] = useState('');

  return (
    <section className='max-w-7xl mx-auto'>
      <div>
        <h1 className='font-extrabold text-[#222328] text-[32px]'>
          Exibição da Comunidade
        </h1>
        <p className='mt-2 text-[#666e75] text-[14px] max-w-[500px]'>
          Navegue por uma coleção de visualmente impressionantes geradas pela IA DALL-E.
        </p>
      </div>

      <div className="mt-16">
        <FormField />
      </div>

      <div className="mt-10">
        { isLoading ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>    
          ) : (
            <>
              { searchText && (
                <h2 className='font-medium text-[#666e75] text-xl mb-3'>
                  Mostrando resultados de <span className='text-[#222328]'>{ searchText }</span>
                </h2>
              )}

              <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
                { searchText ? (
                  <RenderCards 
                    data={[]}
                    title='Nenhum resultado de busca encontrado'
                  />
                ) : (
                  <RenderCards 
                  data={[]}
                  title='Nenhum post encontrado'
                />
                )}
              </div>
            </>
          )
        }
      </div>
    </section>
    
  )
}

export default Home