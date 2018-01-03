import {Component, Inject} from '@angular/core';

@Component({
    selector: 'mojp-header',
    template: `
          <header class="site-nav">
            <nav class="navbar navbar-default" role="navigation">
              <div class="container-fluid">
                <div class="navbar-header">
                  <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                  </button>
                  <a class="navbar-brand" href="/">בית התפוצות</a>
                </div>

                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul class="nav navbar-nav"></ul>
                  <ul class="nav navbar-nav navbar-left"></ul>
                </div>
              </div>
            </nav>
          </header>
    `
})

export class MojpHeaderComponent {}
