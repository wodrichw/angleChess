export class SpecialMoves {
    /* ******Move Data Object********** */
    //move object
    /* ******Castling Data************* */
    //Has Castled
    private wHasCastled: boolean = false;
    private bHasCastled: boolean = false;

    //Can Castle
    private wCastleLeft: boolean = false;
    private wCastleRight: boolean = false;
    private bCastleLeft: boolean = false;
    private bCastleRight: boolean = false;
    //Rook Moved
    private wRookRightMoved: boolean = false;
    private wRookLeftMoved: boolean = false;
    private bRookRightMoved: boolean = false;
    private bRookLeftMoved: boolean = false;
    //King Moved
    private wKingMoved: boolean = false;
    private bKingMoved: boolean = false;

    /* ********En Pasant Data********* */
    private wVulnurablePawn: number;
    private bVulnurablePawn: number;

    /* *******In Check Data************ */
    private wInCheck: boolean = false;
    private bInCheck: boolean = false;
 
    /* *******Pawn Promotion Data****** */
    private wPawnToPromote: number;
    private bPawnToPromote: number;

    /* *******CheckMate Data************ */
    private wInCheckMate: boolean = false;
    private bInCheckMate: boolean = false;


    /* *********Castling Functions******* *//* ***************************** I need to check if there is any offending pieces******* */   
    checkCastle(pieces: string[][], turn: string): void{
        if (turn === 'w'){
            if (this.wHasCastled === true){
                return;
            }
            if (this.wKingMoved === false){
                if (this.wRookLeftMoved === false && pieces[58][0] === 'bl' && pieces[57][0] === 'bl'){
                    this.wCastleLeft = true;
                }
                if (this.wRookRightMoved === false && pieces[61][0] === 'bl' && pieces[62][0] === 'bl'){
                    this.wCastleRight = true;
                }
            }

        }
        if (turn === 'b'){
            if (this.bHasCastled === true){
                return;
            }
            if (this.bKingMoved === false){
                if (this.bRookLeftMoved === false && pieces[1][0] === 'bl' && pieces[2][0] === 'bl'){
                    this.bCastleLeft = true;
                }
                if (this.bRookRightMoved === false && pieces[5][0] === 'bl' && pieces[6][0] === 'bl'){
                    this.bCastleRight = true;
                }
            }
        }
        
    }
    setHasCastled(turn: string){
        if (turn === 'w'){
            this.wHasCastled = true;
        }else{
            this.bHasCastled = true;
        }
    }
    getHasCastled(turn: string): boolean{
         if (turn === 'w'){
            return this.wHasCastled;
        }else{
            return this.bHasCastled;
        }
    }
    getCanCastle(turn: string): boolean[]{
             if (turn === 'w'){
            return [this.wCastleRight, this.wCastleLeft];
        }else{
            return [this.bCastleRight, this.bCastleLeft];
        }
    }
    setRookMoved(pieces: string[][]): void{
        if (pieces[56][0][0] != 'r'){
            this.wRookLeftMoved = true;
        }
        if (pieces[63][0][0] != 'r'){
            this.wRookRightMoved = true;
        }
        if (pieces[7][0][0] != 'r'){
            this.wRookRightMoved = true;
        }
        if (pieces[0][0][0] != 'r'){
            this.wRookLeftMoved = true;
        }
    }
    setKingMoved(pieces: string[][]): void{
        if (pieces[60][0][0] != 'k'){
            this.wKingMoved = true;
        }
        if (pieces[4][0][0] != 'k'){
            this.bKingMoved = true;
        }
    }

    /* ********En Pasant Functions***************** */
    setEnpasant(location: number): void{
        if( location >= 24 && location <= 31){//where black double pawns would be
            this.bVulnurablePawn = location;
        }else{
            this.wVulnurablePawn = location;
        }
    }
    getEnpasantData(turn: string): number[]{
        if (turn === 'w'){
            return [this.bVulnurablePawn, this.bVulnurablePawn - 8];
        }else{
            return [this.wVulnurablePawn, this.wVulnurablePawn + 8];
        }
    }

    /* *********Check Functions********************* */
    checkInCheck(pieces: string[][]): void{
        /*
        
        */
    }

}
