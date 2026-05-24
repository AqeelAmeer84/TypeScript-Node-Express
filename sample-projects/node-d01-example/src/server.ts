import express, { type Request, type Response } from "express";

interface Movie {
    id: number;
    title: string;
    genre: string;
    releaseYear: number;
}

const movieDatabase: Movie[] = [
    { id: 1, title: "The Shawshank Redemption", genre: "Drama", releaseYear: 1994 },
    { id: 2, title: "The Godfather", genre: "Crime", releaseYear: 1972 },
    { id: 3, title: "The Dark Knight", genre: "Action", releaseYear: 2008 },
    { id: 4, title: "Pulp Fiction", genre: "Crime", releaseYear: 1994 },
    { id: 5, title: "Forrest Gump", genre: "Drama", releaseYear: 1994 },
]

const app = express();
const PORT = 3000;

// [GET] /api/movies - Get all movies
app.get("/api/movies", (req: Request, res: Response) => {
    const genreQuery = req.query.genre as string;

    if(genreQuery) {
        const filteredMovies = movieDatabase.filter(
            (movie) => movie.genre.toLocaleLowerCase() === genreQuery.toLocaleLowerCase()
        );
        res.json(filteredMovies);
        return;
    }

    res.json(movieDatabase);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
