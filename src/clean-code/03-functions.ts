(() => {

    // función para obtener información de una película por Id
    //* GetMovieById
    function getMovieInformation(movieId: number | string) {
        console.log({ movieId });
    }
    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    //*
    function getMovieCastByMovieId(movieId: string) {
        console.log(movieId);
    }

    // funcion para obtener el bio del actor por el id
    //* getActorBioById
    function getActorBiography(id: number) {
        console.log({ id });
    }
    interface Movie {
        cast: string[]
        description: string,
        rating: number,
        title: string,
    }
    // Crear una película
    function createMovie({ title, description, rating, cast }: Movie): void {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    function actorExists(fullName: string) {
        console.log(fullName);
    }
    //*createActor
    function createNewActor(fullName: string, birthdate: Date): void {

        actorExists(fullName)
        if (fullName) {
            console.log('Crear actor', birthdate);;
        }

    }
    // continue.
    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {
        return isDead ? 1500
            : isSeparated ? 2500
                : isRetired ? 3000
                    : 4000

        if (isDead) return 1500
        if (isSeparated) return 2500;
        if (isRetired) return 3000;

        return 4000;

    }
})();
