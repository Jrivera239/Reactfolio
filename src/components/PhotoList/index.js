import React, { useState } from "react";
import Modal from "../Modal";

function PhotoList({ category }) {
  const [photos] = useState([
    {
      name: "Grocery aisle",
      category: "Commercial",
      description: "Lorem ipsum dolor sit amet, consectetur adipsicing elit.",
    },
    {
      name: "Produce section",
      category: "commercial",
      description: "vegetables and greens",
    },
    {
      name: "Insde grocery store",
      category: "commercial",
      description:
        "Produce and fruits, apples",
    },
    {
      name: "Outside building",
      category: "commercial",
      description:
        "Multi-floor building residency",
    },
    {
      name: "Cafe interior",
      category: "commercial",
      description:
        "Inside cafe shope restaurant",
    },
    {
      name: "Cat green eyes",
      category: "portraits",
      description:
        "Cat makign eye contact towards the camera",
    },
    {
      name: "Green parrot",
      category: "portraits",
      description:
        "Green parot on its house",
    },
    {
      name: "Yellow macaw",
      category: "portraits",
      description:
        "Extending it's wings beautifuly",
    },
    {
      name: "Pug smile",
      category: "portraits",
      description:
        "Say smile like jaws the shark!",
    },
    {
      name: "Pancakes",
      category: "food",
      description:
        "Delicious pancakes wit fruits on top",
    },
    {
      name: "Burrito",
      category: "food",
      description:
        "Did anyone sid viva Mexico?",
    },
    {
      name: "Scallop pasta",
      category: "food",
      description:
        "sky view scallop on a soup",
    },
    {
      name: "Burger",
      category: "food",
      description:
        "In and out yummy burger",
    },
    {
      name: "Fruit bowl",
      category: "food",
      description:
        "Tastiest breakfast with blackberry,rasberry alonds,pineapple and bueberries",
    },
    {
      name: "Green river",
      category: "landscape",
      description:
        "relaxing rivera",
    },
    {
      name: "Docks",
      category: "landscape",
      description:
        "massive lake traced with a dock in middle",
    },
    {
      name: "Panoramic village by sea",
      category: "landscape",
      description:
        "most unique place to see ",
    },
    {
      name: "Domestic landscape",
      category: "landscape",
      description:
        "Home sweet home",
    },
    {
      name: "Park bench",
      category: "landscape",
      description:
        "Bench on sidewalk",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const currentPhotos = photos.filter((photo) => photo.category === category);

  const [currentPhoto, setCurrentPhoto] = useState();

  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="flex-row">
      {isModalOpen && <Modal currentPhoto={currentPhoto} onClose={toggleModal} />}
      {currentPhotos.map((image, i) => (
        <img
          src={require(`../../assets/small/${category}/${i}.jpg`)}
          alt={image.name}
          className="img-thumbnail mx-1"
          onClick={() => toggleModal(image, i)}
          key={image.name}
        />
      ))}
    </div>
  );
}

export default PhotoList;
