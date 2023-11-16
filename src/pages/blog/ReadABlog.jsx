import { Container } from "react-bootstrap";
import React, { Suspense } from "react";
import { useEffect, useState } from "react";
import style from "./ViewBlog.module.css";
import { useParams } from "react-router-dom";
import { findAllCategoryById } from "../../services/CategoryService";
import Card from "react-bootstrap/Card";

export default function ReadABlog() {
  const { id } = useParams();
  const [post, setPost] = useState([]);

  useEffect(() => {
    findAllCategoryById(1).then((postResp) => {
      setPost(postResp);
    });
  }, []);

  return (
    <Container>
      <div className={`mt-1  ${style.blogPage}`}>
        <div className="readBlogMainDiv">
          <div className="content">
            <Card>
              <Card.Header as="h1">{post.title}</Card.Header>

              <Card.Img
                variant="top"
                src={post.image}
                style={{ maxHeight: "400px", width: "70%" }}
              />
              <Card.Body>
                <Card.Text>
                  {post.description}
                  <br />
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Neque assumenda porro vero nobis laudantium. Voluptatibus
                  accusamus assumenda earum amet, id ea repellendus laudantium
                  excepturi enim quasi veritatis harum cupiditate, ut itaque
                  rerum impedit accusantium obcaecati consequuntur dolores et
                  nam animi explicabo tempore. Nisi reiciendis adipisci minus,
                  porro ab, enim sit sint quaerat praesentium in facilis! Rem
                  sed explicabo, ex possimus, similique maxime consequatur
                  facere tenetur alias libero ad ullam non omnis nihil quis
                  aperiam itaque? Atque eos sit architecto dolorem dignissimos
                  odit ea distinctio quo laboriosam nisi quae minima dolore
                  exercitationem itaque, iste quisquam ut incidunt adipisci
                  voluptatum! Aspernatur asperiores deserunt impedit a omnis
                  laboriosam totam in! Explicabo nesciunt consequatur in sunt,
                  eligendi aliquid fuga perspiciatis voluptas nam ducimus
                  inventore. Nulla fugit velit culpa consequuntur temporibus
                  tempore animi obcaecati illo commodi qui odio sapiente,
                  architecto sit voluptatum molestias perspiciatis magnam, eius
                  ab ad vero soluta dolor molestiae. Quas dolorum nisi,
                  dignissimos commodi placeat magni distinctio, numquam, hic
                  quis explicabo sunt eligendi. Assumenda soluta labore, dolorum
                  vel quibusdam nulla quidem iusto quas molestias, nemo unde
                  aperiam alias totam repudiandae non optio ullam excepturi!
                  Placeat eveniet corporis rerum voluptas eos distinctio aliquid
                  suscipit dolor nisi quos esse nulla illo error, vel voluptatem
                  ea ab! Quam quidem, veniam accusamus repellendus saepe in
                  tenetur rem vel illo quis suscipit adipisci aspernatur itaque
                  eum ipsam error dolor exercitationem blanditiis esse dolorum
                  voluptatibus fugiat corrupti quo excepturi? Accusamus odit
                  minima, numquam animi corporis autem sunt aspernatur eos eius
                  magnam nostrum aut adipisci distinctio voluptatum iusto,
                  sapiente reiciendis exercitationem, laudantium quis
                  doloremque? Quasi quidem est omnis iure ex quos voluptatibus
                  pariatur reiciendis aliquam, quo itaque optio quae? Quaerat
                  aut non eius sunt ullam enim corporis deserunt esse eveniet
                  iste. Ut, quisquam eius amet quibusdam repellendus harum
                  ducimus. Dolore recusandae animi repellendus aspernatur
                  corporis possimus perferendis quibusdam officia commodi, nisi
                  sequi vel illo expedita tempora neque, natus culpa blanditiis
                  numquam saepe. Cum adipisci inventore esse laboriosam
                  recusandae ipsa blanditiis quas excepturi. Id libero
                  necessitatibus voluptates dolorum eveniet recusandae similique
                  veritatis itaque? Quo, vitae. Excepturi minus eum, alias ullam
                  quaerat fugit cumque. Maiores quaerat officia vero aperiam
                  obcaecati rem incidunt reprehenderit est iusto ea, fugit sint
                  necessitatibus rerum illum laudantium eligendi voluptate,
                  quibusdam harum. Sit facere et ut quod voluptate soluta
                  accusamus culpa, quasi repudiandae minima nulla
                  exercitationem, voluptas ipsum provident ipsam aliquid! Odit
                  ipsam repellat itaque ab amet corporis rem eum suscipit
                  commodi repudiandae blanditiis architecto laborum ullam
                  incidunt maxime, quidem non impedit illo voluptatibus iste
                  saepe veniam consequuntur! Modi earum obcaecati nulla eligendi
                  nam a eaque tenetur repellat. Reiciendis nisi veritatis
                  distinctio officiis quisquam hic esse ipsam dignissimos ullam
                  qui asperiores veniam iste at beatae voluptatem, perferendis
                  praesentium, saepe incidunt. Id tempore aperiam sint labore
                  quisquam esse corporis minima totam laudantium, atque placeat
                  doloribus error quo a dolorum saepe libero quia eveniet quas
                  repudiandae vel repellat officia dignissimos rem? Amet vitae
                  asperiores provident debitis rem consequuntur possimus commodi
                  deleniti a voluptas? Sed odio similique fuga animi illum
                  cupiditate, deleniti qui quis quia. Fuga minima nesciunt
                  aliquam facilis reiciendis voluptatum, neque odit rem quam
                  animi sint explicabo ipsam. Ipsam tempore nisi consequatur.
                  Repellendus quae cumque at? Esse ullam voluptatem rerum
                  possimus eligendi consectetur aut magni iste rem, facere est?
                  Quos atque, maiores delectus dolor molestias rerum expedita,
                  vero reprehenderit, earum qui architecto beatae odio deleniti
                  accusantium harum ducimus nostrum assumenda iure nemo amet
                  minima? Eum sequi ipsam ea, officia ipsum officiis fuga
                  voluptates sit cupiditate earum obcaecati suscipit nobis ipsa
                  nesciunt harum aut at, nisi consequuntur labore placeat
                  facilis molestiae, odit praesentium laborum. Illo, dolore
                  consectetur! Labore vel, beatae aperiam fugiat suscipit quae
                  enim sapiente. In, aut dolore. Sunt ipsum, eligendi minus sit
                  tempore non ipsa maiores! Ut, laborum exercitationem ducimus
                  nisi assumenda eos facilis accusantium facere nostrum
                  perferendis illo animi magni voluptate amet aspernatur impedit
                  eaque, saepe harum expedita. Saepe eos dicta recusandae
                  doloremque fuga nam! Animi ipsum eos ratione natus hic
                  maiores. Voluptatum dolorem, consectetur reprehenderit aperiam
                  possimus sunt quo debitis quas officia tempore. Iure facilis
                  delectus vitae quae illum ab pariatur, nemo iusto
                  necessitatibus cupiditate distinctio officia laboriosam,
                  veniam temporibus, ad alias! Voluptates excepturi alias
                  provident incidunt sint tempore enim expedita voluptatem
                  facere obcaecati recusandae reprehenderit quas, reiciendis hic
                  perferendis nostrum labore quis quisquam. Quisquam cumque amet
                  doloribus natus laborum, officiis possimus totam maxime nemo
                  temporibus necessitatibus animi repellendus maiores molestiae
                  magnam quis inventore, dolore dicta ipsum. Exercitationem rem
                  error voluptate eum, cumque eos omnis aut corrupti fugiat
                  possimus cupiditate deserunt dolor modi nihil est incidunt
                  commodi, repellendus aperiam provident! Optio incidunt dolorem
                  quasi consectetur consequuntur ea quae aperiam, iste
                  exercitationem at, sed rerum ipsa ut natus, deleniti
                  reiciendis corporis. Qui doloremque voluptates voluptate ea.
                  Commodi esse quod, non iure architecto voluptatem nostrum
                  quaerat quam nemo nisi odio libero incidunt debitis quis
                  doloribus alias quasi magni aspernatur, velit eveniet eos hic
                  a vitae. Voluptas facere cumque fuga. Labore dolorem quo aut
                  animi molestiae corporis fuga, voluptatibus vitae officiis
                  quisquam eius culpa dicta et atque! Quod laborum sed
                  voluptatum maxime eligendi quia mollitia nobis eveniet
                  similique! Dolores autem nisi nemo qui recusandae odit
                  voluptatum, adipisci esse officiis, iusto quod? Earum magnam
                  voluptatum quod reiciendis? Modi debitis quidem possimus. Quas
                  neque dolores velit qui. Quas eum assumenda velit expedita
                  quos aliquid corporis accusantium? Quam sit recusandae
                  temporibus tempore necessitatibus inventore obcaecati quos
                  voluptatum odio, doloremque beatae repellat optio deserunt at
                  incidunt, earum magnam est nulla repudiandae fugiat quae
                  consequatur eveniet! Ipsa fugit, vitae eveniet assumenda
                  corporis expedita totam praesentium veniam deleniti ipsum
                  explicabo temporibus enim itaque molestias qui quas quo
                  architecto laborum non porro maxime doloribus quae debitis
                  voluptates! Nulla quasi magnam consequatur nesciunt modi natus
                  nobis necessitatibus impedit tempore vero, officiis ut
                  veritatis cum ullam nam rerum deserunt qui amet vitae quae
                  saepe reprehenderit ipsum. Aspernatur quos esse numquam illum,
                  ullam hic tempora tenetur unde itaque. Necessitatibus
                  perspiciatis cum est asperiores libero placeat quaerat
                  possimus ipsa sequi repellendus iure dicta eos nemo, maxime
                  nam nisi blanditiis culpa dolorem voluptatum voluptate
                  recusandae adipisci porro. Omnis, assumenda. Eveniet ex totam
                  minima veniam velit eaque laboriosam delectus explicabo omnis.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </Container>
  );
}
