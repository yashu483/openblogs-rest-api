import style from "./styles/PostCard.module.css";
import demo from "@/assets/images/demo.jpg";

export const PostCard = () => {
  return (
    <article className={style.container}>
      <div className={style.imageContainer}>
        <img src={demo} alt="An Image for Title" />
      </div>
      <h2 className={style.title}>How to debug javascript.</h2>
      <p className={style.postInfo}>
        <span className={style.author} aria-label="author name">
          Yashu Lilhare
        </span>
        <span className={style.createdAt} aria-label="post creation date">
          25/12/2004
        </span>
      </p>
      <div className={style.content}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat natus
        architecto et. Nostrum id iste nobis repellendus, temporibus est
        quisquam, eligendi quidem, suscipit aspernatur beatae saepe? Corrupti,
        omnis dolorum deserunt minus provident autem beatae repellat ut at fuga
        tempore commodi architecto, laborum quas quasi eum, rem velit optio
        voluptas. Ullam nam velit possimus consequatur mollitia optio,
        exercitationem nemo sapiente est, saepe libero accusamus facere, modi
        harum. Nihil, perferendis officia. Sed nostrum aspernatur, maxime sequi
        quis ullam asperiores debitis dolore nihil non assumenda a perspiciatis
        doloribus sapiente explicabo placeat. Tempore nemo reprehenderit,
        doloribus eos iusto atque, nulla exercitationem earum ratione veniam
        fugit maxime quibusdam molestias a consequuntur minus ut repellat nihil
        sed quaerat. Facilis rem est nemo et, at amet magnam temporibus
        molestias exercitationem blanditiis quia fugiat, maiores error corrupti
        eius culpa repellendus impedit nulla aperiam, ducimus quis. Quam,
        temporibus excepturi odit sit ducimus veniam provident. Soluta, numquam
        quos aliquid aspernatur quas dolorem necessitatibus qui amet incidunt
        laborum laudantium harum voluptatem est enim reiciendis ducimus, quasi
        eveniet nemo! Laboriosam in, aliquam accusamus adipisci architecto
        distinctio totam at voluptate, blanditiis ad dignissimos, quam
        consequatur quae quas magni. Neque saepe et voluptate odit consequuntur
        itaque voluptatibus facere aspernatur minima, ex maiores harum autem
        quod a? Vitae omnis et, quis doloremque id illum adipisci! Debitis iure
        eligendi similique corporis quo et amet ratione sit aut laudantium
        repellendus distinctio esse, expedita sed saepe cumque asperiores
        deleniti officiis maxime veritatis, ipsam ut quod dolore? Modi
        distinctio debitis vero odio blanditiis, soluta molestias atque deserunt
        suscipit? Maxime molestiae nulla accusamus beatae voluptates, expedita
        aut eum adipisci nam officia aspernatur excepturi inventore quas
        quibusdam vero! Maxime, consequuntur velit aut quis hic labore molestias
        nihil eligendi quod illo at veritatis est maiores debitis repudiandae
        deserunt ut corporis corrupti beatae laborum id ab! Fugit, laborum
        veritatis quo fugiat necessitatibus eos.
      </div>
    </article>
  );
};
