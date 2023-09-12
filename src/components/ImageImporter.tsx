import { useEffect, useState } from "react";

export const useImage = (fileName: string) => {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<unknown | null>(null);
	const [image, setImage] = useState(null);

	useEffect(() => {
		const fetchImage = async () => {
			try {
				const response = await import(`./../assets/photos/${fileName}`); // change relative path to suit your needs
				setImage(response.default);
			} catch (err: unknown) {
				setError(err);
			} finally {
				setLoading(false);
			}
		};

		fetchImage();
	}, [fileName]);

	return {
		loading,
		error,
		image,
	};
};

// export default useImage;
