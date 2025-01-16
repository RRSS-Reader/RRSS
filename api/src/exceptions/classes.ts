import { HttpException, ArgumentsHost } from "@nestjs/common";
import { Response } from "express";

// Interfaces
import { ExceptionInfo, ExceptionInfoBase } from "@shared/exceptions.js";

/**
 * Custom exception base class for RRSS backend
 *
 * Check out https://docs.nestjs.com/exception-filters for more info
 */
export class RRSSAPIException<ExcTitleType extends ExceptionInfo["title"]>
  extends HttpException
  implements ExceptionInfoBase
{
  constructor(
    /** Unique title identifier of this exception */
    public readonly title: ExcTitleType,
    /** Info related to this exception */
    public readonly info: Extract<
      ExceptionInfo,
      { title: ExcTitleType }
    >["info"],
  ) {
    super(title, 400);
  }

  catch(exception: RRSSAPIException<ExcTitleType>, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    // This `RRSSAPIException` object itself should satisfy the
    // shared exception interface
    response.status(400).json(this);
  }
}
