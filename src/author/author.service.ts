import { Injectable } from '@nestjs/common';
import { Author } from './author.model';

@Injectable()
export class AuthorService {
  private authors: Author[] = [];

  getAuthors(): Author[] {
    return this.authors;
  }

  createAuthors({ name, age }): Author {
    const author = {
      name,
      age,
    };

    this.authors.push(author);
    return author;
  }
}
