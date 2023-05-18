import type { OnInit } from "@angular/core";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { bootstrapApplication, Title } from "@angular/platform-browser";
import { provideRouter, RouterOutlet } from "@angular/router";

import { HomeComponent } from "./pages/home/home.component";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet],
  selector: "app-root",
  standalone: true,
  template: `<router-outlet />`,
})
export class RootComponent implements OnInit {
  private readonly title: Title = inject(Title);

  public ngOnInit(): void {
    this.title.setTitle("Frontend Mentor | Order Summary Component");
  }
}

bootstrapApplication(RootComponent, {
  providers: [
    provideRouter([
      {
        component: HomeComponent,
        path: "",
      },
    ]),
  ],
}).catch((error) => {
  console.error(error);
});
