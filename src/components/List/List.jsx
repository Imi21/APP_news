import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";

const List = () => {
  const { articles, getArticles } = useContext(GlobalContext);
  
  useEffect(() => {
    getArticles();
   
  }, []);

  const noticia = articles.map((noticia) => {
    return (
      <div className="box-list">
        <div class="card-body" key={noticia.id}>
          <h3 class="card-title">{noticia.title}</h3>
          <p class="card-text">{noticia.abstract}</p>
          <p>
            {noticia.byline}. Published on {noticia.published_date}
          </p>

          {noticia.media.length !== 0 ? (
            <img
              class="card-img-top img-news"
              src={noticia.media[0]["media-metadata"][2].url}
              alt="imagen"
            />
          ) : null}
          <a class="btn btn-primary" href={noticia.url}>
            Enlace a noticia
          </a>
        </div>
      </div>
    );
  });
  return <div>{noticia}</div>;
};

export default List;
