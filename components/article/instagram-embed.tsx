type Props = {
    url:string
}

export const InstagramEmbed = ({ url }:Props) => {
    return (
        <div  className="instagram-embed-container">
            <div
            className="instagram-embed"
              dangerouslySetInnerHTML={{
                __html: `
                  <blockquote class="instagram-media" data-instgrm-permalink="${url}" data-instgrm-version="13"></blockquote>
                  <script async src="https://www.instagram.com/embed.js"></script>
                `,
              }}
            />

        </div>
    );
  };
  