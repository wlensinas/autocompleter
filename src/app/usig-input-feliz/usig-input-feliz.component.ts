import { Component, OnInit, OnChanges, AfterContentChecked, SimpleChanges } from '@angular/core';
import { Autocompleter } from '@usig-gcba/autocompleter';

@Component({
  selector: 'app-usig-input-feliz',
  templateUrl: './usig-input-feliz.component.html',
  styleUrls: ['./usig-input-feliz.component.css']
})

export class UsigInputFelizComponent implements OnInit, OnChanges, AfterContentChecked {
  
  state = {
    autocompleter: null,
    showMap: false,
    loading: false,
    x: 10,
    y: 10,
    input: '',
    error: null,
    suggestions: [],
    selectedSuggestion: null
  }
  

  autocompleter;

  public suggestionsCallback = suggestions => {
    console.log('suggestions...', suggestions);
    this.state.suggestions.push(suggestions);
  };

  public completeSuggestionsCallback = suggestions => {
    if (suggestions.length === 0) {
      this.state.suggestions = [];
    } else {
      this.state.error = null;
    }
  };

  public errorCallback = error => {
    this.state.error = error;
  };
  options = { maxSuggestions: 10, debug: false };
  constructor() { 
    this.autocompleter = new Autocompleter(
      {
        onCompleteSuggestions: this.completeSuggestionsCallback,
        onSuggestions: this.suggestionsCallback,
        onError: this.errorCallback
      },
      this.options
    );
    this.autocompleter.addSuggester('Direcciones', { inputPause: 250 });
    this.autocompleter.addSuggester('Lugares');
    
    console.log(this.autocompleter);
  }

  llamada(text) {
    this.autocompleter.updateSuggestions(text);
  }
  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    /* this.state.autocompleter.updateSuggestions(changes.target.currentValue);
    this.state.input = changes.target.currentValue; */
  }

  ngAfterContentChecked(): void {
    
     
    
     // Opciones de config del autocomplete
        
        const buscarDireccionesAmba = true;
    
        //Callbacks del autocomplete
        
    
        
        /* console.log(autocompleter);
        autocompleter.addSuggester('Direcciones', { inputPause: 250 });
        autocompleter.addSuggester('Lugares');
        if (buscarDireccionesAmba) autocompleter.addSuggester('DireccionesAMBA');
    
        this.state.autocompleter = autocompleter
        this.state.suggestions = []; */ 
  }

  public handleClick(suggestion) {
    /* console.log('suggestion', suggestion);

    if (suggestion) {
      this.state.selectedSuggestion = suggestion;
      if (suggestion.type === 'CALLE') {
        this.state.suggestions = [];
        this.state.input = suggestion.title + '';
      } else {
        this.state.input = suggestion.title;
        this.state.suggestions = [];
        this.state.loading = true;

        if (suggestion.type === 'DIRECCION') {
          this.state.showMap = true;
          this.state.loading = false;
          this.state.x = suggestion.data.coordenadas.x;
          this.state.y = suggestion.data.coordenadas.y;
        }
      }
    } */

  }
}
