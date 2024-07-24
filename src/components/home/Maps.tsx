"use client";
const Maps = () => {
  // return <div ref={mapRef} className="mx-auto h-96 md:max-w-7xl"/>;
  return (
    <div className="mx-auto mt-10 mb-28 md:max-w-7xl">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.960899880017!2d98.6269765758131!3d3.596436250238584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30312fd1b680511f%3A0xeaba4edd1b9cbd32!2sPT.%20Global%20Mitra%20Prima!5e0!3m2!1sen!2sid!4v1718678397440!5m2!1sen!2sid"
        className="mx-auto h-96 md:w-full"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Maps;
