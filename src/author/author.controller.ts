import { Body, Controller, Get, Post } from '@nestjs/common';
import { Author } from './author.model';
import { AuthorService } from './author.service';

@Controller('author')
export class AuthorController {
  constructor(private authorService: AuthorService) {}
  @Get()
  getAuthor(): Author[] {
    return this.authorService.getAuthors();
  }

  @Post()
  createAuthor(@Body() { name, age }): Author {
    return this.authorService.createAuthors({ name, age });
  }
}
