import Article from "./Article"
import blogData from "../data/blog";
function ArticleList(){
    return(
        <main>
            {blogData.posts.map(({id, title, date="January 1, 1970", preview}) =>{
                return(
                    < Article key={id} 
                    title={title} 
                    date={date} 
                    preview={preview}
                    />
                )
            })}
        </main>
     )

}
export default ArticleList;