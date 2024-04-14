type Props = {
    author:string
}

const Author = ({author}:Props) => {
    return ( 
        <div className="auth">
        <div className="author-info">
            <div className="author-avatar">
                <img src="img/favicon.jpg" width="165" height="165" alt="Anna Nikova" className="avatar avatar-165 wp-user-avatar wp-user-avatar-165 alignnone photo" />
            </div>
            <div className="author-description">
                <h5>
                    <a href="#">
                        {author}
                    </a>
                </h5>
                <p>
                {author} is an entertainment writer with a passion for movies, TV shows, and celebrity news.
                </p>
            </div>
        </div>
    </div>
     );
}
 
export default Author;