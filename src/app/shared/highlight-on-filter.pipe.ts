import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "highlightOnFilter",
})
export class HighlightOnFilterPipe implements PipeTransform {
  transform(text: string, search): unknown {
    return text;
    var pattern = search.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    pattern = pattern
      .split(" ")
      .filter((t) => {
        return t.length > 0;
      })
      .join("|");
    var regex = new RegExp(pattern, "gi");

    return search
      ? text.replace(
          regex,
          (match) => `<span class="highlight">${match}</span>`
        )
      : text;
  }
}
