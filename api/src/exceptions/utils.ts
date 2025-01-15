import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

/**
 * Determine if an error is a Prisma known request error with specified error code
 *
 * Check out
 * [Prisma Docs](https://www.prisma.io/docs/orm/reference/error-reference#error-codes)
 * for more info about the error code.
 */
export function isPrismaKnownErrorWithCode(e: unknown, code: string) {
  return e instanceof PrismaClientKnownRequestError && e.code == code;
}

export function isPrismaNotExistsError(e: unknown) {
  return isPrismaKnownErrorWithCode(e, "P2001");
}

export function isPrismaUniqueFailedError(e: unknown) {
  return isPrismaKnownErrorWithCode(e, "P2002");
}
