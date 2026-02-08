export default function ShowMap() {
	return (
		<iframe
			width="100%"
			height="100%"
			style={{ border: 0 }}
			loading="lazy"
			allowFullScreen
			referrerPolicy="no-referrer-when-downgrade"
			src={`https://www.google.com/maps/embed/v1/place?key=${import.meta.env.VITE_MAP_API_KEY}&q=Silverline Place, 91 Trinity Rd, London N22 8YB`}></iframe>
	);
}
