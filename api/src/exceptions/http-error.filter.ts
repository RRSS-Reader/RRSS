// Basics
import { ExceptionFilter, Catch, ArgumentsHost } from "@nestjs/common";
import { Response } from "express";

// Interfaces
import { RRSSAPIException } from "./classes.js";
import { ExceptionTitleLitrals } from "#shared/exceptions.js";

@Catch(RRSSAPIException)
export class RRSSAPIExceptionFilter<T extends ExceptionTitleLitrals>
  implements ExceptionFilter
{
  catch(exception: RRSSAPIException<T>, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();

    response.status(status).json({
      success: false,
      title: exception.title,
      info: exception.info,
    });
  }
}
