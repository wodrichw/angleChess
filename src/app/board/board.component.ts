import { Component, OnInit } from '@angular/core';
import { PiecesComponent } from './../pieces/pieces.component'
import { PossibleMoves } from './possible-moves'


const startPieces: string[][] = [
  ['rb'], ['nb'], ['bb'], ['qb'], ['kb'], ['bb'], ['nb'], ['rb'],
  ['pb'], ['pb'], ['pb'], ['pb'], ['pb'], ['pb'], ['pb'], ['pb'],
  ['bl'], ['bl'], ['bl'], ['bl'], ['bl'], ['bl'], ['bl'], ['bl'],
  ['bl'], ['bl'], ['bl'], ['bl'], ['bl'], ['bl'], ['bl'], ['bl'],
  ['bl'], ['bl'], ['bl'], ['bl'], ['bl'], ['bl'], ['bl'], ['bl'],
  ['bl'], ['bl'], ['bl'], ['bl'], ['bl'], ['bl'], ['bl'], ['bl'],
  ['pw'], ['pw'], ['pw'], ['pw'], ['pw'], ['pw'], ['pw'], ['pw'],
  ['rw'], ['nw'], ['bw'], ['qw'], ['kw'], ['bw'], ['nw'], ['rw']
];



@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})

export class BoardComponent {
  selectedPiece: number;
  pm: PossibleMoves = new PossibleMoves;
  pieces: string[][] = startPieces;
  constructor() {
    var i;
    for (i = 0; i < this.pieces.length; i++) {
      this.pieces[i].push(i);
    }
  }
  onPieceToggle(event): void {
    console.log(event);
    this.move(event);
  }
  move(id: number): void {
    if (this.selectedPiece == null) {
      if (this.pieces[id][0] != 'bl') {
        this.selectedPiece = id;
        this.pm.buildPossibleMoves(this.pieces, this.selectedPiece);
        this.addHighlights();
      }
    } else if (this.pm.getPossibleMoves() != null && this.pm.getPossibleMoves().includes(id)) {
      this.removeHighlights();
      this.pieces[id][0] = this.pieces[this.selectedPiece][0];
      this.pieces[this.selectedPiece][0] = 'bl';
      this.selectedPiece = null;
    } else {
      this.removeHighlights();
      this.selectedPiece = null;
    }
  }
 
  addHighlights(): void{
    if (this.pm.getPossibleMoves() == null) return;
    var i;
    for(i = 0; i < this.pm.getPossibleMoves().length; i ++){
      this.pieces[this.pm.getPossibleMoves()[i]][0] += 'h';
      console.log(this.pieces[this.pm.getPossibleMoves()[i]][0]);
    }
  }
  removeHighlights(): void{
    if (this.pm.getPossibleMoves() == null) return;
    var i;
    for(i = 0; i < this.pm.getPossibleMoves().length; i++){
      this.pieces[this.pm.getPossibleMoves()[i]][0] = this.pieces[this.pm.getPossibleMoves()[i]][0].substring(0, this.pieces[this.pm.getPossibleMoves()[i]][0].length - 1);
      console.log("substring", this.pieces[this.pm.getPossibleMoves()[i]][0]);
    }
  }
}
