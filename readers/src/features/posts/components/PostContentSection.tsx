import style from "./styles/PostContentSection.module.css";
import img from "@/assets/images/demo.jpg";

export const PostContentSection = () => {
  return (
    <article className={style.article}>
      <div className={style.thumbnail}>
        <img src={img} alt="Thumbnail image for the post" />
      </div>
      <header className={style.header}>
        <h1>A Welcome Post</h1>
        <p className={style.author}>Yashu Lilhare</p>
        <p className={style.postInfo}>Mar 1, 2024 10:35 PM</p>
      </header>
      <section className={style.section}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
        ratione recusandae officiis cumque, adipisci blanditiis! Distinctio
        harum, veniam fuga voluptates ab recusandae quos vero expedita deserunt
        ex aspernatur quia culpa quasi! Itaque natus consectetur placeat. Libero
        eos ipsam ex tempore laborum, temporibus minus aut accusamus
        reprehenderit alias qui iste praesentium, quibusdam odit? Saepe soluta
        odit numquam. Nemo, odit ea natus sed magni, voluptatum fuga magnam
        itaque adipisci repellat ratione, tenetur aliquam aut. Dolorum
        obcaecati, perspiciatis quasi numquam excepturi labore. Rerum libero
        quae voluptatum perferendis itaque velit molestias tempora, dolorem
        corporis incidunt voluptas illo doloribus odio. Aspernatur libero ea
        quos ratione nemo perspiciatis, qui dolorem accusamus! Non, officiis
        enim consequuntur dolor excepturi animi fuga officia illum, architecto
        nesciunt accusantium quas iusto quidem cupiditate sint suscipit ipsa.
        Ex, quis possimus vel exercitationem itaque doloremque ad cumque quo
        voluptates quasi architecto modi optio odit autem laborum at dicta sunt
        sequi illum eum iusto sit! Eligendi quibusdam praesentium nulla omnis id
        repellat unde repudiandae temporibus corporis ab in tempora qui tenetur
        eveniet excepturi, nam necessitatibus consequuntur accusantium vero
        incidunt, amet, explicabo labore inventore ipsa! Exercitationem, facere
        cumque cum consequatur fuga eveniet quasi illum voluptate. Quo
        doloremque repellat et saepe ex enim suscipit qui laboriosam soluta
        quaerat adipisci corporis quod reiciendis tempore, ut natus, porro id
        repellendus placeat, magni tempora quisquam dolores. Eveniet quos minima
        animi libero excepturi accusamus fugiat quibusdam et iusto facilis
        aliquid repellat nam velit, obcaecati praesentium molestiae pariatur
        necessitatibus maxime tempore eaque! Architecto provident, repudiandae
        eaque ducimus dolores delectus enim fuga natus mollitia libero sapiente
        esse et sint dolorum incidunt perspiciatis odio nulla vitae, deleniti
        inventore molestias itaque dolore porro. Iste culpa hic natus illum
        perspiciatis aspernatur dignissimos itaque adipisci. Necessitatibus
        dignissimos perspiciatis magnam vel ipsum a excepturi atque pariatur
        placeat labore! Obcaecati voluptas eligendi maiores quis excepturi
        dolorum quia ratione?
      </section>
    </article>
  );
};
