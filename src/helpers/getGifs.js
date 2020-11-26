



export const getGifs = async( category ) => {
    const apiKey     = 'S1RlTg9msfiwoxno1rKcFoQ1tLGhLUwA';
    const reqUrl     = `https://api.giphy.com/v1/gifs/search?api_key=${ apiKey }&q=${ encodeURI(`"${ category }"`) }&limit=${ 6 }`;
    const resp       = await fetch( reqUrl );
    const { data }   = await resp.json();
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title || 'Sin nombre',
            url: img.images.downsized_medium.url,
        }
    });

    return gifs;
}