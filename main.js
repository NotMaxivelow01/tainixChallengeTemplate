import { Game } from "./game";
// Ta key
const playerKey = '';
// Le code du challenge
const engineCode = '';

async function main() {
    if (playerKey.length === 0 || engineCode.length === 0) {
        return;
    }

    let game = new Game(playerKey, engineCode);
    await game.start();

    // Data de jeu
    console.log(game.gameData);

    // ------------------ CODE DU CHALLENGE ------------------

    // Ta rÃ©ponse
    let playerResponse = '';

    // -------------------------------------------------------

    // Pour repondre au challenge
    // game.output({data: playerResponse});
}

main();
