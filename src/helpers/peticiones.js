
const API_KEY = '8fec448c533621996b193b90eccf5e77';

export const getGenero = async(genero) =>{
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${ API_KEY }&with_genres=${genero}`;
    const resp = await fetch(url);
    const { results } = await resp.json();

    const gifs = results.map( gne =>{
        return{
            id:gne.id,
            path:gne.backdrop_path,
            title:gne.original_title,
            overview:gne.overview,
            popularity:gne.popularity,
            poster_path:gne.poster_path,
            date:gne.release_date.split('-')[0]
        }
    })

    return gifs;

}

export const getGeneroRanking = async() =>{
    const url = `https://api.themoviedb.org/3/trending/all/week?api_key=${ API_KEY }&language=es=US`;
    const resp = await fetch(url);
    const { results } = await resp.json();

    const rankins = results.map( gne =>{
        return{
            id:gne.id,
            path:gne.backdrop_path,
            title:gne.original_title,
            overview:gne.overview,
            popularity:gne.popularity,
            poster_path:gne.poster_path,
            date:(gne.release_date === "undefined")?gne.release_date.split('-')[0]:'2021'
        }
    })
    return rankins;
}

export const getMoviesSimilares = async(id) =>{
    const url = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`;
    const resp = await fetch(url);
    const { results } = await resp.json();

    const similares = results.map( gne =>{
        return{
            id:gne.id,
            path:gne.backdrop_path,
            title:gne.original_title,
            overview:gne.overview,
            popularity:gne.popularity,
            poster_path:gne.poster_path,
            date:(gne.release_date === "undefined")?gne.release_date.split('-')[0]:'2021'
        }
    })
    return similares;
}

export const getComentarios = async(id) =>{
    const url = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`;
    const resp = await fetch(url);
    const { results } = await resp.json();

    const comentarios = results.map( gne =>{
        return{
            id:gne.id,
            autor:gne.author,
            comentario:gne.content,
            fecha:gne.created_at,
            detalle:gne.author_details
        }
    })
    return comentarios;
}

export const getMovieID = async(id) =>{
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;
    const resp = await fetch(url);
    const results  = await resp.json();

    return results;
}

