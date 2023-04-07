import krusty from "../assets/img/characters/krusty.png";
import burns from "../assets/img/characters/burns.png";
import flanders from "../assets/img/characters/flanders.png";
import apu from "../assets/img/characters/apu.png";
import doctor from "../assets/img/characters/doctor.png";

interface ImagePaths {
  [key: string]: string;
}

const imagePaths: ImagePaths = {
  krusty: krusty,
  burns: burns,
  flanders: flanders,
  apu: apu,
  doctor: doctor,
};

export default imagePaths;
