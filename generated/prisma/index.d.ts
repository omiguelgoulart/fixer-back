
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Planta
 * 
 */
export type Planta = $Result.DefaultSelection<Prisma.$PlantaPayload>
/**
 * Model Area
 * 
 */
export type Area = $Result.DefaultSelection<Prisma.$AreaPayload>
/**
 * Model Sistema
 * 
 */
export type Sistema = $Result.DefaultSelection<Prisma.$SistemaPayload>
/**
 * Model Ativo
 * 
 */
export type Ativo = $Result.DefaultSelection<Prisma.$AtivoPayload>
/**
 * Model Falha
 * 
 */
export type Falha = $Result.DefaultSelection<Prisma.$FalhaPayload>
/**
 * Model Subativo
 * 
 */
export type Subativo = $Result.DefaultSelection<Prisma.$SubativoPayload>
/**
 * Model Manutencao
 * 
 */
export type Manutencao = $Result.DefaultSelection<Prisma.$ManutencaoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TipoAtivo: {
  MECANICO: 'MECANICO',
  ELETRICO: 'ELETRICO',
  ELETRONICO: 'ELETRONICO',
  HIDRAULICO: 'HIDRAULICO',
  OUTRO: 'OUTRO'
};

export type TipoAtivo = (typeof TipoAtivo)[keyof typeof TipoAtivo]


export const SituacaoAtivo: {
  ATIVO: 'ATIVO',
  INATIVO: 'INATIVO',
  MANUTENCAO: 'MANUTENCAO',
  DESCARTADO: 'DESCARTADO'
};

export type SituacaoAtivo = (typeof SituacaoAtivo)[keyof typeof SituacaoAtivo]


export const Criticidade: {
  ALTA: 'ALTA',
  MEDIA: 'MEDIA',
  BAIXA: 'BAIXA'
};

export type Criticidade = (typeof Criticidade)[keyof typeof Criticidade]


export const TipoManutencao: {
  CORRETIVA: 'CORRETIVA',
  PREVENTIVA: 'PREVENTIVA',
  PREDITIVA: 'PREDITIVA'
};

export type TipoManutencao = (typeof TipoManutencao)[keyof typeof TipoManutencao]

}

export type TipoAtivo = $Enums.TipoAtivo

export const TipoAtivo: typeof $Enums.TipoAtivo

export type SituacaoAtivo = $Enums.SituacaoAtivo

export const SituacaoAtivo: typeof $Enums.SituacaoAtivo

export type Criticidade = $Enums.Criticidade

export const Criticidade: typeof $Enums.Criticidade

export type TipoManutencao = $Enums.TipoManutencao

export const TipoManutencao: typeof $Enums.TipoManutencao

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Plantas
 * const plantas = await prisma.planta.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Plantas
   * const plantas = await prisma.planta.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.planta`: Exposes CRUD operations for the **Planta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Plantas
    * const plantas = await prisma.planta.findMany()
    * ```
    */
  get planta(): Prisma.PlantaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.area`: Exposes CRUD operations for the **Area** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Areas
    * const areas = await prisma.area.findMany()
    * ```
    */
  get area(): Prisma.AreaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sistema`: Exposes CRUD operations for the **Sistema** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sistemas
    * const sistemas = await prisma.sistema.findMany()
    * ```
    */
  get sistema(): Prisma.SistemaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ativo`: Exposes CRUD operations for the **Ativo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ativos
    * const ativos = await prisma.ativo.findMany()
    * ```
    */
  get ativo(): Prisma.AtivoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.falha`: Exposes CRUD operations for the **Falha** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Falhas
    * const falhas = await prisma.falha.findMany()
    * ```
    */
  get falha(): Prisma.FalhaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subativo`: Exposes CRUD operations for the **Subativo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subativos
    * const subativos = await prisma.subativo.findMany()
    * ```
    */
  get subativo(): Prisma.SubativoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.manutencao`: Exposes CRUD operations for the **Manutencao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Manutencaos
    * const manutencaos = await prisma.manutencao.findMany()
    * ```
    */
  get manutencao(): Prisma.ManutencaoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Planta: 'Planta',
    Area: 'Area',
    Sistema: 'Sistema',
    Ativo: 'Ativo',
    Falha: 'Falha',
    Subativo: 'Subativo',
    Manutencao: 'Manutencao'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "planta" | "area" | "sistema" | "ativo" | "falha" | "subativo" | "manutencao"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Planta: {
        payload: Prisma.$PlantaPayload<ExtArgs>
        fields: Prisma.PlantaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlantaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlantaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantaPayload>
          }
          findFirst: {
            args: Prisma.PlantaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlantaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantaPayload>
          }
          findMany: {
            args: Prisma.PlantaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantaPayload>[]
          }
          create: {
            args: Prisma.PlantaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantaPayload>
          }
          createMany: {
            args: Prisma.PlantaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PlantaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantaPayload>
          }
          update: {
            args: Prisma.PlantaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantaPayload>
          }
          deleteMany: {
            args: Prisma.PlantaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlantaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PlantaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantaPayload>
          }
          aggregate: {
            args: Prisma.PlantaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlanta>
          }
          groupBy: {
            args: Prisma.PlantaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlantaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlantaCountArgs<ExtArgs>
            result: $Utils.Optional<PlantaCountAggregateOutputType> | number
          }
        }
      }
      Area: {
        payload: Prisma.$AreaPayload<ExtArgs>
        fields: Prisma.AreaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AreaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AreaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          findFirst: {
            args: Prisma.AreaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AreaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          findMany: {
            args: Prisma.AreaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>[]
          }
          create: {
            args: Prisma.AreaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          createMany: {
            args: Prisma.AreaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AreaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          update: {
            args: Prisma.AreaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          deleteMany: {
            args: Prisma.AreaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AreaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AreaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          aggregate: {
            args: Prisma.AreaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArea>
          }
          groupBy: {
            args: Prisma.AreaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AreaGroupByOutputType>[]
          }
          count: {
            args: Prisma.AreaCountArgs<ExtArgs>
            result: $Utils.Optional<AreaCountAggregateOutputType> | number
          }
        }
      }
      Sistema: {
        payload: Prisma.$SistemaPayload<ExtArgs>
        fields: Prisma.SistemaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SistemaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SistemaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SistemaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SistemaPayload>
          }
          findFirst: {
            args: Prisma.SistemaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SistemaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SistemaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SistemaPayload>
          }
          findMany: {
            args: Prisma.SistemaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SistemaPayload>[]
          }
          create: {
            args: Prisma.SistemaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SistemaPayload>
          }
          createMany: {
            args: Prisma.SistemaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SistemaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SistemaPayload>
          }
          update: {
            args: Prisma.SistemaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SistemaPayload>
          }
          deleteMany: {
            args: Prisma.SistemaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SistemaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SistemaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SistemaPayload>
          }
          aggregate: {
            args: Prisma.SistemaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSistema>
          }
          groupBy: {
            args: Prisma.SistemaGroupByArgs<ExtArgs>
            result: $Utils.Optional<SistemaGroupByOutputType>[]
          }
          count: {
            args: Prisma.SistemaCountArgs<ExtArgs>
            result: $Utils.Optional<SistemaCountAggregateOutputType> | number
          }
        }
      }
      Ativo: {
        payload: Prisma.$AtivoPayload<ExtArgs>
        fields: Prisma.AtivoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AtivoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtivoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AtivoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtivoPayload>
          }
          findFirst: {
            args: Prisma.AtivoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtivoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AtivoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtivoPayload>
          }
          findMany: {
            args: Prisma.AtivoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtivoPayload>[]
          }
          create: {
            args: Prisma.AtivoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtivoPayload>
          }
          createMany: {
            args: Prisma.AtivoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AtivoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtivoPayload>
          }
          update: {
            args: Prisma.AtivoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtivoPayload>
          }
          deleteMany: {
            args: Prisma.AtivoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AtivoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AtivoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtivoPayload>
          }
          aggregate: {
            args: Prisma.AtivoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAtivo>
          }
          groupBy: {
            args: Prisma.AtivoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AtivoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AtivoCountArgs<ExtArgs>
            result: $Utils.Optional<AtivoCountAggregateOutputType> | number
          }
        }
      }
      Falha: {
        payload: Prisma.$FalhaPayload<ExtArgs>
        fields: Prisma.FalhaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FalhaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FalhaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FalhaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FalhaPayload>
          }
          findFirst: {
            args: Prisma.FalhaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FalhaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FalhaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FalhaPayload>
          }
          findMany: {
            args: Prisma.FalhaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FalhaPayload>[]
          }
          create: {
            args: Prisma.FalhaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FalhaPayload>
          }
          createMany: {
            args: Prisma.FalhaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FalhaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FalhaPayload>
          }
          update: {
            args: Prisma.FalhaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FalhaPayload>
          }
          deleteMany: {
            args: Prisma.FalhaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FalhaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FalhaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FalhaPayload>
          }
          aggregate: {
            args: Prisma.FalhaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFalha>
          }
          groupBy: {
            args: Prisma.FalhaGroupByArgs<ExtArgs>
            result: $Utils.Optional<FalhaGroupByOutputType>[]
          }
          count: {
            args: Prisma.FalhaCountArgs<ExtArgs>
            result: $Utils.Optional<FalhaCountAggregateOutputType> | number
          }
        }
      }
      Subativo: {
        payload: Prisma.$SubativoPayload<ExtArgs>
        fields: Prisma.SubativoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubativoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubativoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubativoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubativoPayload>
          }
          findFirst: {
            args: Prisma.SubativoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubativoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubativoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubativoPayload>
          }
          findMany: {
            args: Prisma.SubativoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubativoPayload>[]
          }
          create: {
            args: Prisma.SubativoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubativoPayload>
          }
          createMany: {
            args: Prisma.SubativoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SubativoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubativoPayload>
          }
          update: {
            args: Prisma.SubativoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubativoPayload>
          }
          deleteMany: {
            args: Prisma.SubativoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubativoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SubativoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubativoPayload>
          }
          aggregate: {
            args: Prisma.SubativoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubativo>
          }
          groupBy: {
            args: Prisma.SubativoGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubativoGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubativoCountArgs<ExtArgs>
            result: $Utils.Optional<SubativoCountAggregateOutputType> | number
          }
        }
      }
      Manutencao: {
        payload: Prisma.$ManutencaoPayload<ExtArgs>
        fields: Prisma.ManutencaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ManutencaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManutencaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ManutencaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManutencaoPayload>
          }
          findFirst: {
            args: Prisma.ManutencaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManutencaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ManutencaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManutencaoPayload>
          }
          findMany: {
            args: Prisma.ManutencaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManutencaoPayload>[]
          }
          create: {
            args: Prisma.ManutencaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManutencaoPayload>
          }
          createMany: {
            args: Prisma.ManutencaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ManutencaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManutencaoPayload>
          }
          update: {
            args: Prisma.ManutencaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManutencaoPayload>
          }
          deleteMany: {
            args: Prisma.ManutencaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ManutencaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ManutencaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManutencaoPayload>
          }
          aggregate: {
            args: Prisma.ManutencaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateManutencao>
          }
          groupBy: {
            args: Prisma.ManutencaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ManutencaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ManutencaoCountArgs<ExtArgs>
            result: $Utils.Optional<ManutencaoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    planta?: PlantaOmit
    area?: AreaOmit
    sistema?: SistemaOmit
    ativo?: AtivoOmit
    falha?: FalhaOmit
    subativo?: SubativoOmit
    manutencao?: ManutencaoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PlantaCountOutputType
   */

  export type PlantaCountOutputType = {
    area: number
  }

  export type PlantaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    area?: boolean | PlantaCountOutputTypeCountAreaArgs
  }

  // Custom InputTypes
  /**
   * PlantaCountOutputType without action
   */
  export type PlantaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantaCountOutputType
     */
    select?: PlantaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlantaCountOutputType without action
   */
  export type PlantaCountOutputTypeCountAreaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AreaWhereInput
  }


  /**
   * Count Type AreaCountOutputType
   */

  export type AreaCountOutputType = {
    sistema: number
  }

  export type AreaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sistema?: boolean | AreaCountOutputTypeCountSistemaArgs
  }

  // Custom InputTypes
  /**
   * AreaCountOutputType without action
   */
  export type AreaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AreaCountOutputType
     */
    select?: AreaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AreaCountOutputType without action
   */
  export type AreaCountOutputTypeCountSistemaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SistemaWhereInput
  }


  /**
   * Count Type SistemaCountOutputType
   */

  export type SistemaCountOutputType = {
    ativo: number
  }

  export type SistemaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ativo?: boolean | SistemaCountOutputTypeCountAtivoArgs
  }

  // Custom InputTypes
  /**
   * SistemaCountOutputType without action
   */
  export type SistemaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SistemaCountOutputType
     */
    select?: SistemaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SistemaCountOutputType without action
   */
  export type SistemaCountOutputTypeCountAtivoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtivoWhereInput
  }


  /**
   * Count Type AtivoCountOutputType
   */

  export type AtivoCountOutputType = {
    subativos: number
    manutencoes: number
    falhas: number
  }

  export type AtivoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subativos?: boolean | AtivoCountOutputTypeCountSubativosArgs
    manutencoes?: boolean | AtivoCountOutputTypeCountManutencoesArgs
    falhas?: boolean | AtivoCountOutputTypeCountFalhasArgs
  }

  // Custom InputTypes
  /**
   * AtivoCountOutputType without action
   */
  export type AtivoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtivoCountOutputType
     */
    select?: AtivoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AtivoCountOutputType without action
   */
  export type AtivoCountOutputTypeCountSubativosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubativoWhereInput
  }

  /**
   * AtivoCountOutputType without action
   */
  export type AtivoCountOutputTypeCountManutencoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ManutencaoWhereInput
  }

  /**
   * AtivoCountOutputType without action
   */
  export type AtivoCountOutputTypeCountFalhasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FalhaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Planta
   */

  export type AggregatePlanta = {
    _count: PlantaCountAggregateOutputType | null
    _avg: PlantaAvgAggregateOutputType | null
    _sum: PlantaSumAggregateOutputType | null
    _min: PlantaMinAggregateOutputType | null
    _max: PlantaMaxAggregateOutputType | null
  }

  export type PlantaAvgAggregateOutputType = {
    id: number | null
  }

  export type PlantaSumAggregateOutputType = {
    id: number | null
  }

  export type PlantaMinAggregateOutputType = {
    id: number | null
    nome: string | null
    localizacao: string | null
    codigo: string | null
  }

  export type PlantaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    localizacao: string | null
    codigo: string | null
  }

  export type PlantaCountAggregateOutputType = {
    id: number
    nome: number
    localizacao: number
    codigo: number
    _all: number
  }


  export type PlantaAvgAggregateInputType = {
    id?: true
  }

  export type PlantaSumAggregateInputType = {
    id?: true
  }

  export type PlantaMinAggregateInputType = {
    id?: true
    nome?: true
    localizacao?: true
    codigo?: true
  }

  export type PlantaMaxAggregateInputType = {
    id?: true
    nome?: true
    localizacao?: true
    codigo?: true
  }

  export type PlantaCountAggregateInputType = {
    id?: true
    nome?: true
    localizacao?: true
    codigo?: true
    _all?: true
  }

  export type PlantaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Planta to aggregate.
     */
    where?: PlantaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plantas to fetch.
     */
    orderBy?: PlantaOrderByWithRelationInput | PlantaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlantaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plantas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plantas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Plantas
    **/
    _count?: true | PlantaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlantaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlantaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlantaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlantaMaxAggregateInputType
  }

  export type GetPlantaAggregateType<T extends PlantaAggregateArgs> = {
        [P in keyof T & keyof AggregatePlanta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlanta[P]>
      : GetScalarType<T[P], AggregatePlanta[P]>
  }




  export type PlantaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlantaWhereInput
    orderBy?: PlantaOrderByWithAggregationInput | PlantaOrderByWithAggregationInput[]
    by: PlantaScalarFieldEnum[] | PlantaScalarFieldEnum
    having?: PlantaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlantaCountAggregateInputType | true
    _avg?: PlantaAvgAggregateInputType
    _sum?: PlantaSumAggregateInputType
    _min?: PlantaMinAggregateInputType
    _max?: PlantaMaxAggregateInputType
  }

  export type PlantaGroupByOutputType = {
    id: number
    nome: string
    localizacao: string
    codigo: string
    _count: PlantaCountAggregateOutputType | null
    _avg: PlantaAvgAggregateOutputType | null
    _sum: PlantaSumAggregateOutputType | null
    _min: PlantaMinAggregateOutputType | null
    _max: PlantaMaxAggregateOutputType | null
  }

  type GetPlantaGroupByPayload<T extends PlantaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlantaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlantaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlantaGroupByOutputType[P]>
            : GetScalarType<T[P], PlantaGroupByOutputType[P]>
        }
      >
    >


  export type PlantaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    localizacao?: boolean
    codigo?: boolean
    area?: boolean | Planta$areaArgs<ExtArgs>
    _count?: boolean | PlantaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["planta"]>



  export type PlantaSelectScalar = {
    id?: boolean
    nome?: boolean
    localizacao?: boolean
    codigo?: boolean
  }

  export type PlantaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "localizacao" | "codigo", ExtArgs["result"]["planta"]>
  export type PlantaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    area?: boolean | Planta$areaArgs<ExtArgs>
    _count?: boolean | PlantaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PlantaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Planta"
    objects: {
      area: Prisma.$AreaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      localizacao: string
      codigo: string
    }, ExtArgs["result"]["planta"]>
    composites: {}
  }

  type PlantaGetPayload<S extends boolean | null | undefined | PlantaDefaultArgs> = $Result.GetResult<Prisma.$PlantaPayload, S>

  type PlantaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlantaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlantaCountAggregateInputType | true
    }

  export interface PlantaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Planta'], meta: { name: 'Planta' } }
    /**
     * Find zero or one Planta that matches the filter.
     * @param {PlantaFindUniqueArgs} args - Arguments to find a Planta
     * @example
     * // Get one Planta
     * const planta = await prisma.planta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlantaFindUniqueArgs>(args: SelectSubset<T, PlantaFindUniqueArgs<ExtArgs>>): Prisma__PlantaClient<$Result.GetResult<Prisma.$PlantaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Planta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlantaFindUniqueOrThrowArgs} args - Arguments to find a Planta
     * @example
     * // Get one Planta
     * const planta = await prisma.planta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlantaFindUniqueOrThrowArgs>(args: SelectSubset<T, PlantaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlantaClient<$Result.GetResult<Prisma.$PlantaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Planta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantaFindFirstArgs} args - Arguments to find a Planta
     * @example
     * // Get one Planta
     * const planta = await prisma.planta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlantaFindFirstArgs>(args?: SelectSubset<T, PlantaFindFirstArgs<ExtArgs>>): Prisma__PlantaClient<$Result.GetResult<Prisma.$PlantaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Planta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantaFindFirstOrThrowArgs} args - Arguments to find a Planta
     * @example
     * // Get one Planta
     * const planta = await prisma.planta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlantaFindFirstOrThrowArgs>(args?: SelectSubset<T, PlantaFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlantaClient<$Result.GetResult<Prisma.$PlantaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Plantas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Plantas
     * const plantas = await prisma.planta.findMany()
     * 
     * // Get first 10 Plantas
     * const plantas = await prisma.planta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const plantaWithIdOnly = await prisma.planta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlantaFindManyArgs>(args?: SelectSubset<T, PlantaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlantaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Planta.
     * @param {PlantaCreateArgs} args - Arguments to create a Planta.
     * @example
     * // Create one Planta
     * const Planta = await prisma.planta.create({
     *   data: {
     *     // ... data to create a Planta
     *   }
     * })
     * 
     */
    create<T extends PlantaCreateArgs>(args: SelectSubset<T, PlantaCreateArgs<ExtArgs>>): Prisma__PlantaClient<$Result.GetResult<Prisma.$PlantaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Plantas.
     * @param {PlantaCreateManyArgs} args - Arguments to create many Plantas.
     * @example
     * // Create many Plantas
     * const planta = await prisma.planta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlantaCreateManyArgs>(args?: SelectSubset<T, PlantaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Planta.
     * @param {PlantaDeleteArgs} args - Arguments to delete one Planta.
     * @example
     * // Delete one Planta
     * const Planta = await prisma.planta.delete({
     *   where: {
     *     // ... filter to delete one Planta
     *   }
     * })
     * 
     */
    delete<T extends PlantaDeleteArgs>(args: SelectSubset<T, PlantaDeleteArgs<ExtArgs>>): Prisma__PlantaClient<$Result.GetResult<Prisma.$PlantaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Planta.
     * @param {PlantaUpdateArgs} args - Arguments to update one Planta.
     * @example
     * // Update one Planta
     * const planta = await prisma.planta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlantaUpdateArgs>(args: SelectSubset<T, PlantaUpdateArgs<ExtArgs>>): Prisma__PlantaClient<$Result.GetResult<Prisma.$PlantaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Plantas.
     * @param {PlantaDeleteManyArgs} args - Arguments to filter Plantas to delete.
     * @example
     * // Delete a few Plantas
     * const { count } = await prisma.planta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlantaDeleteManyArgs>(args?: SelectSubset<T, PlantaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plantas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Plantas
     * const planta = await prisma.planta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlantaUpdateManyArgs>(args: SelectSubset<T, PlantaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Planta.
     * @param {PlantaUpsertArgs} args - Arguments to update or create a Planta.
     * @example
     * // Update or create a Planta
     * const planta = await prisma.planta.upsert({
     *   create: {
     *     // ... data to create a Planta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Planta we want to update
     *   }
     * })
     */
    upsert<T extends PlantaUpsertArgs>(args: SelectSubset<T, PlantaUpsertArgs<ExtArgs>>): Prisma__PlantaClient<$Result.GetResult<Prisma.$PlantaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Plantas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantaCountArgs} args - Arguments to filter Plantas to count.
     * @example
     * // Count the number of Plantas
     * const count = await prisma.planta.count({
     *   where: {
     *     // ... the filter for the Plantas we want to count
     *   }
     * })
    **/
    count<T extends PlantaCountArgs>(
      args?: Subset<T, PlantaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlantaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Planta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlantaAggregateArgs>(args: Subset<T, PlantaAggregateArgs>): Prisma.PrismaPromise<GetPlantaAggregateType<T>>

    /**
     * Group by Planta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlantaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlantaGroupByArgs['orderBy'] }
        : { orderBy?: PlantaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlantaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlantaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Planta model
   */
  readonly fields: PlantaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Planta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlantaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    area<T extends Planta$areaArgs<ExtArgs> = {}>(args?: Subset<T, Planta$areaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Planta model
   */
  interface PlantaFieldRefs {
    readonly id: FieldRef<"Planta", 'Int'>
    readonly nome: FieldRef<"Planta", 'String'>
    readonly localizacao: FieldRef<"Planta", 'String'>
    readonly codigo: FieldRef<"Planta", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Planta findUnique
   */
  export type PlantaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planta
     */
    select?: PlantaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Planta
     */
    omit?: PlantaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantaInclude<ExtArgs> | null
    /**
     * Filter, which Planta to fetch.
     */
    where: PlantaWhereUniqueInput
  }

  /**
   * Planta findUniqueOrThrow
   */
  export type PlantaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planta
     */
    select?: PlantaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Planta
     */
    omit?: PlantaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantaInclude<ExtArgs> | null
    /**
     * Filter, which Planta to fetch.
     */
    where: PlantaWhereUniqueInput
  }

  /**
   * Planta findFirst
   */
  export type PlantaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planta
     */
    select?: PlantaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Planta
     */
    omit?: PlantaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantaInclude<ExtArgs> | null
    /**
     * Filter, which Planta to fetch.
     */
    where?: PlantaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plantas to fetch.
     */
    orderBy?: PlantaOrderByWithRelationInput | PlantaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plantas.
     */
    cursor?: PlantaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plantas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plantas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plantas.
     */
    distinct?: PlantaScalarFieldEnum | PlantaScalarFieldEnum[]
  }

  /**
   * Planta findFirstOrThrow
   */
  export type PlantaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planta
     */
    select?: PlantaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Planta
     */
    omit?: PlantaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantaInclude<ExtArgs> | null
    /**
     * Filter, which Planta to fetch.
     */
    where?: PlantaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plantas to fetch.
     */
    orderBy?: PlantaOrderByWithRelationInput | PlantaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plantas.
     */
    cursor?: PlantaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plantas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plantas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plantas.
     */
    distinct?: PlantaScalarFieldEnum | PlantaScalarFieldEnum[]
  }

  /**
   * Planta findMany
   */
  export type PlantaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planta
     */
    select?: PlantaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Planta
     */
    omit?: PlantaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantaInclude<ExtArgs> | null
    /**
     * Filter, which Plantas to fetch.
     */
    where?: PlantaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plantas to fetch.
     */
    orderBy?: PlantaOrderByWithRelationInput | PlantaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Plantas.
     */
    cursor?: PlantaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plantas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plantas.
     */
    skip?: number
    distinct?: PlantaScalarFieldEnum | PlantaScalarFieldEnum[]
  }

  /**
   * Planta create
   */
  export type PlantaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planta
     */
    select?: PlantaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Planta
     */
    omit?: PlantaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantaInclude<ExtArgs> | null
    /**
     * The data needed to create a Planta.
     */
    data: XOR<PlantaCreateInput, PlantaUncheckedCreateInput>
  }

  /**
   * Planta createMany
   */
  export type PlantaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Plantas.
     */
    data: PlantaCreateManyInput | PlantaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Planta update
   */
  export type PlantaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planta
     */
    select?: PlantaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Planta
     */
    omit?: PlantaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantaInclude<ExtArgs> | null
    /**
     * The data needed to update a Planta.
     */
    data: XOR<PlantaUpdateInput, PlantaUncheckedUpdateInput>
    /**
     * Choose, which Planta to update.
     */
    where: PlantaWhereUniqueInput
  }

  /**
   * Planta updateMany
   */
  export type PlantaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Plantas.
     */
    data: XOR<PlantaUpdateManyMutationInput, PlantaUncheckedUpdateManyInput>
    /**
     * Filter which Plantas to update
     */
    where?: PlantaWhereInput
    /**
     * Limit how many Plantas to update.
     */
    limit?: number
  }

  /**
   * Planta upsert
   */
  export type PlantaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planta
     */
    select?: PlantaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Planta
     */
    omit?: PlantaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantaInclude<ExtArgs> | null
    /**
     * The filter to search for the Planta to update in case it exists.
     */
    where: PlantaWhereUniqueInput
    /**
     * In case the Planta found by the `where` argument doesn't exist, create a new Planta with this data.
     */
    create: XOR<PlantaCreateInput, PlantaUncheckedCreateInput>
    /**
     * In case the Planta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlantaUpdateInput, PlantaUncheckedUpdateInput>
  }

  /**
   * Planta delete
   */
  export type PlantaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planta
     */
    select?: PlantaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Planta
     */
    omit?: PlantaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantaInclude<ExtArgs> | null
    /**
     * Filter which Planta to delete.
     */
    where: PlantaWhereUniqueInput
  }

  /**
   * Planta deleteMany
   */
  export type PlantaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plantas to delete
     */
    where?: PlantaWhereInput
    /**
     * Limit how many Plantas to delete.
     */
    limit?: number
  }

  /**
   * Planta.area
   */
  export type Planta$areaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    where?: AreaWhereInput
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    cursor?: AreaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AreaScalarFieldEnum | AreaScalarFieldEnum[]
  }

  /**
   * Planta without action
   */
  export type PlantaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planta
     */
    select?: PlantaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Planta
     */
    omit?: PlantaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantaInclude<ExtArgs> | null
  }


  /**
   * Model Area
   */

  export type AggregateArea = {
    _count: AreaCountAggregateOutputType | null
    _avg: AreaAvgAggregateOutputType | null
    _sum: AreaSumAggregateOutputType | null
    _min: AreaMinAggregateOutputType | null
    _max: AreaMaxAggregateOutputType | null
  }

  export type AreaAvgAggregateOutputType = {
    id: number | null
    id_planta: number | null
  }

  export type AreaSumAggregateOutputType = {
    id: number | null
    id_planta: number | null
  }

  export type AreaMinAggregateOutputType = {
    id: number | null
    nome: string | null
    id_planta: number | null
    codigo: string | null
  }

  export type AreaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    id_planta: number | null
    codigo: string | null
  }

  export type AreaCountAggregateOutputType = {
    id: number
    nome: number
    id_planta: number
    codigo: number
    _all: number
  }


  export type AreaAvgAggregateInputType = {
    id?: true
    id_planta?: true
  }

  export type AreaSumAggregateInputType = {
    id?: true
    id_planta?: true
  }

  export type AreaMinAggregateInputType = {
    id?: true
    nome?: true
    id_planta?: true
    codigo?: true
  }

  export type AreaMaxAggregateInputType = {
    id?: true
    nome?: true
    id_planta?: true
    codigo?: true
  }

  export type AreaCountAggregateInputType = {
    id?: true
    nome?: true
    id_planta?: true
    codigo?: true
    _all?: true
  }

  export type AreaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Area to aggregate.
     */
    where?: AreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Areas to fetch.
     */
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Areas
    **/
    _count?: true | AreaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AreaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AreaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AreaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AreaMaxAggregateInputType
  }

  export type GetAreaAggregateType<T extends AreaAggregateArgs> = {
        [P in keyof T & keyof AggregateArea]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArea[P]>
      : GetScalarType<T[P], AggregateArea[P]>
  }




  export type AreaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AreaWhereInput
    orderBy?: AreaOrderByWithAggregationInput | AreaOrderByWithAggregationInput[]
    by: AreaScalarFieldEnum[] | AreaScalarFieldEnum
    having?: AreaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AreaCountAggregateInputType | true
    _avg?: AreaAvgAggregateInputType
    _sum?: AreaSumAggregateInputType
    _min?: AreaMinAggregateInputType
    _max?: AreaMaxAggregateInputType
  }

  export type AreaGroupByOutputType = {
    id: number
    nome: string
    id_planta: number
    codigo: string
    _count: AreaCountAggregateOutputType | null
    _avg: AreaAvgAggregateOutputType | null
    _sum: AreaSumAggregateOutputType | null
    _min: AreaMinAggregateOutputType | null
    _max: AreaMaxAggregateOutputType | null
  }

  type GetAreaGroupByPayload<T extends AreaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AreaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AreaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AreaGroupByOutputType[P]>
            : GetScalarType<T[P], AreaGroupByOutputType[P]>
        }
      >
    >


  export type AreaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    id_planta?: boolean
    codigo?: boolean
    planta?: boolean | PlantaDefaultArgs<ExtArgs>
    sistema?: boolean | Area$sistemaArgs<ExtArgs>
    _count?: boolean | AreaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["area"]>



  export type AreaSelectScalar = {
    id?: boolean
    nome?: boolean
    id_planta?: boolean
    codigo?: boolean
  }

  export type AreaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "id_planta" | "codigo", ExtArgs["result"]["area"]>
  export type AreaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    planta?: boolean | PlantaDefaultArgs<ExtArgs>
    sistema?: boolean | Area$sistemaArgs<ExtArgs>
    _count?: boolean | AreaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AreaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Area"
    objects: {
      planta: Prisma.$PlantaPayload<ExtArgs>
      sistema: Prisma.$SistemaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      id_planta: number
      codigo: string
    }, ExtArgs["result"]["area"]>
    composites: {}
  }

  type AreaGetPayload<S extends boolean | null | undefined | AreaDefaultArgs> = $Result.GetResult<Prisma.$AreaPayload, S>

  type AreaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AreaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AreaCountAggregateInputType | true
    }

  export interface AreaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Area'], meta: { name: 'Area' } }
    /**
     * Find zero or one Area that matches the filter.
     * @param {AreaFindUniqueArgs} args - Arguments to find a Area
     * @example
     * // Get one Area
     * const area = await prisma.area.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AreaFindUniqueArgs>(args: SelectSubset<T, AreaFindUniqueArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Area that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AreaFindUniqueOrThrowArgs} args - Arguments to find a Area
     * @example
     * // Get one Area
     * const area = await prisma.area.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AreaFindUniqueOrThrowArgs>(args: SelectSubset<T, AreaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Area that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaFindFirstArgs} args - Arguments to find a Area
     * @example
     * // Get one Area
     * const area = await prisma.area.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AreaFindFirstArgs>(args?: SelectSubset<T, AreaFindFirstArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Area that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaFindFirstOrThrowArgs} args - Arguments to find a Area
     * @example
     * // Get one Area
     * const area = await prisma.area.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AreaFindFirstOrThrowArgs>(args?: SelectSubset<T, AreaFindFirstOrThrowArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Areas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Areas
     * const areas = await prisma.area.findMany()
     * 
     * // Get first 10 Areas
     * const areas = await prisma.area.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const areaWithIdOnly = await prisma.area.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AreaFindManyArgs>(args?: SelectSubset<T, AreaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Area.
     * @param {AreaCreateArgs} args - Arguments to create a Area.
     * @example
     * // Create one Area
     * const Area = await prisma.area.create({
     *   data: {
     *     // ... data to create a Area
     *   }
     * })
     * 
     */
    create<T extends AreaCreateArgs>(args: SelectSubset<T, AreaCreateArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Areas.
     * @param {AreaCreateManyArgs} args - Arguments to create many Areas.
     * @example
     * // Create many Areas
     * const area = await prisma.area.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AreaCreateManyArgs>(args?: SelectSubset<T, AreaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Area.
     * @param {AreaDeleteArgs} args - Arguments to delete one Area.
     * @example
     * // Delete one Area
     * const Area = await prisma.area.delete({
     *   where: {
     *     // ... filter to delete one Area
     *   }
     * })
     * 
     */
    delete<T extends AreaDeleteArgs>(args: SelectSubset<T, AreaDeleteArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Area.
     * @param {AreaUpdateArgs} args - Arguments to update one Area.
     * @example
     * // Update one Area
     * const area = await prisma.area.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AreaUpdateArgs>(args: SelectSubset<T, AreaUpdateArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Areas.
     * @param {AreaDeleteManyArgs} args - Arguments to filter Areas to delete.
     * @example
     * // Delete a few Areas
     * const { count } = await prisma.area.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AreaDeleteManyArgs>(args?: SelectSubset<T, AreaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Areas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Areas
     * const area = await prisma.area.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AreaUpdateManyArgs>(args: SelectSubset<T, AreaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Area.
     * @param {AreaUpsertArgs} args - Arguments to update or create a Area.
     * @example
     * // Update or create a Area
     * const area = await prisma.area.upsert({
     *   create: {
     *     // ... data to create a Area
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Area we want to update
     *   }
     * })
     */
    upsert<T extends AreaUpsertArgs>(args: SelectSubset<T, AreaUpsertArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Areas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaCountArgs} args - Arguments to filter Areas to count.
     * @example
     * // Count the number of Areas
     * const count = await prisma.area.count({
     *   where: {
     *     // ... the filter for the Areas we want to count
     *   }
     * })
    **/
    count<T extends AreaCountArgs>(
      args?: Subset<T, AreaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AreaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Area.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AreaAggregateArgs>(args: Subset<T, AreaAggregateArgs>): Prisma.PrismaPromise<GetAreaAggregateType<T>>

    /**
     * Group by Area.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AreaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AreaGroupByArgs['orderBy'] }
        : { orderBy?: AreaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AreaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAreaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Area model
   */
  readonly fields: AreaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Area.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AreaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    planta<T extends PlantaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlantaDefaultArgs<ExtArgs>>): Prisma__PlantaClient<$Result.GetResult<Prisma.$PlantaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sistema<T extends Area$sistemaArgs<ExtArgs> = {}>(args?: Subset<T, Area$sistemaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SistemaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Area model
   */
  interface AreaFieldRefs {
    readonly id: FieldRef<"Area", 'Int'>
    readonly nome: FieldRef<"Area", 'String'>
    readonly id_planta: FieldRef<"Area", 'Int'>
    readonly codigo: FieldRef<"Area", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Area findUnique
   */
  export type AreaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Area to fetch.
     */
    where: AreaWhereUniqueInput
  }

  /**
   * Area findUniqueOrThrow
   */
  export type AreaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Area to fetch.
     */
    where: AreaWhereUniqueInput
  }

  /**
   * Area findFirst
   */
  export type AreaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Area to fetch.
     */
    where?: AreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Areas to fetch.
     */
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Areas.
     */
    cursor?: AreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Areas.
     */
    distinct?: AreaScalarFieldEnum | AreaScalarFieldEnum[]
  }

  /**
   * Area findFirstOrThrow
   */
  export type AreaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Area to fetch.
     */
    where?: AreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Areas to fetch.
     */
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Areas.
     */
    cursor?: AreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Areas.
     */
    distinct?: AreaScalarFieldEnum | AreaScalarFieldEnum[]
  }

  /**
   * Area findMany
   */
  export type AreaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Areas to fetch.
     */
    where?: AreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Areas to fetch.
     */
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Areas.
     */
    cursor?: AreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Areas.
     */
    skip?: number
    distinct?: AreaScalarFieldEnum | AreaScalarFieldEnum[]
  }

  /**
   * Area create
   */
  export type AreaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * The data needed to create a Area.
     */
    data: XOR<AreaCreateInput, AreaUncheckedCreateInput>
  }

  /**
   * Area createMany
   */
  export type AreaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Areas.
     */
    data: AreaCreateManyInput | AreaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Area update
   */
  export type AreaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * The data needed to update a Area.
     */
    data: XOR<AreaUpdateInput, AreaUncheckedUpdateInput>
    /**
     * Choose, which Area to update.
     */
    where: AreaWhereUniqueInput
  }

  /**
   * Area updateMany
   */
  export type AreaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Areas.
     */
    data: XOR<AreaUpdateManyMutationInput, AreaUncheckedUpdateManyInput>
    /**
     * Filter which Areas to update
     */
    where?: AreaWhereInput
    /**
     * Limit how many Areas to update.
     */
    limit?: number
  }

  /**
   * Area upsert
   */
  export type AreaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * The filter to search for the Area to update in case it exists.
     */
    where: AreaWhereUniqueInput
    /**
     * In case the Area found by the `where` argument doesn't exist, create a new Area with this data.
     */
    create: XOR<AreaCreateInput, AreaUncheckedCreateInput>
    /**
     * In case the Area was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AreaUpdateInput, AreaUncheckedUpdateInput>
  }

  /**
   * Area delete
   */
  export type AreaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter which Area to delete.
     */
    where: AreaWhereUniqueInput
  }

  /**
   * Area deleteMany
   */
  export type AreaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Areas to delete
     */
    where?: AreaWhereInput
    /**
     * Limit how many Areas to delete.
     */
    limit?: number
  }

  /**
   * Area.sistema
   */
  export type Area$sistemaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sistema
     */
    select?: SistemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sistema
     */
    omit?: SistemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SistemaInclude<ExtArgs> | null
    where?: SistemaWhereInput
    orderBy?: SistemaOrderByWithRelationInput | SistemaOrderByWithRelationInput[]
    cursor?: SistemaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SistemaScalarFieldEnum | SistemaScalarFieldEnum[]
  }

  /**
   * Area without action
   */
  export type AreaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
  }


  /**
   * Model Sistema
   */

  export type AggregateSistema = {
    _count: SistemaCountAggregateOutputType | null
    _avg: SistemaAvgAggregateOutputType | null
    _sum: SistemaSumAggregateOutputType | null
    _min: SistemaMinAggregateOutputType | null
    _max: SistemaMaxAggregateOutputType | null
  }

  export type SistemaAvgAggregateOutputType = {
    id: number | null
    id_area: number | null
  }

  export type SistemaSumAggregateOutputType = {
    id: number | null
    id_area: number | null
  }

  export type SistemaMinAggregateOutputType = {
    id: number | null
    nome: string | null
    id_area: number | null
    codigo: string | null
  }

  export type SistemaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    id_area: number | null
    codigo: string | null
  }

  export type SistemaCountAggregateOutputType = {
    id: number
    nome: number
    id_area: number
    codigo: number
    _all: number
  }


  export type SistemaAvgAggregateInputType = {
    id?: true
    id_area?: true
  }

  export type SistemaSumAggregateInputType = {
    id?: true
    id_area?: true
  }

  export type SistemaMinAggregateInputType = {
    id?: true
    nome?: true
    id_area?: true
    codigo?: true
  }

  export type SistemaMaxAggregateInputType = {
    id?: true
    nome?: true
    id_area?: true
    codigo?: true
  }

  export type SistemaCountAggregateInputType = {
    id?: true
    nome?: true
    id_area?: true
    codigo?: true
    _all?: true
  }

  export type SistemaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sistema to aggregate.
     */
    where?: SistemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sistemas to fetch.
     */
    orderBy?: SistemaOrderByWithRelationInput | SistemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SistemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sistemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sistemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sistemas
    **/
    _count?: true | SistemaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SistemaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SistemaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SistemaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SistemaMaxAggregateInputType
  }

  export type GetSistemaAggregateType<T extends SistemaAggregateArgs> = {
        [P in keyof T & keyof AggregateSistema]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSistema[P]>
      : GetScalarType<T[P], AggregateSistema[P]>
  }




  export type SistemaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SistemaWhereInput
    orderBy?: SistemaOrderByWithAggregationInput | SistemaOrderByWithAggregationInput[]
    by: SistemaScalarFieldEnum[] | SistemaScalarFieldEnum
    having?: SistemaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SistemaCountAggregateInputType | true
    _avg?: SistemaAvgAggregateInputType
    _sum?: SistemaSumAggregateInputType
    _min?: SistemaMinAggregateInputType
    _max?: SistemaMaxAggregateInputType
  }

  export type SistemaGroupByOutputType = {
    id: number
    nome: string
    id_area: number
    codigo: string
    _count: SistemaCountAggregateOutputType | null
    _avg: SistemaAvgAggregateOutputType | null
    _sum: SistemaSumAggregateOutputType | null
    _min: SistemaMinAggregateOutputType | null
    _max: SistemaMaxAggregateOutputType | null
  }

  type GetSistemaGroupByPayload<T extends SistemaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SistemaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SistemaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SistemaGroupByOutputType[P]>
            : GetScalarType<T[P], SistemaGroupByOutputType[P]>
        }
      >
    >


  export type SistemaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    id_area?: boolean
    codigo?: boolean
    area?: boolean | AreaDefaultArgs<ExtArgs>
    ativo?: boolean | Sistema$ativoArgs<ExtArgs>
    _count?: boolean | SistemaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sistema"]>



  export type SistemaSelectScalar = {
    id?: boolean
    nome?: boolean
    id_area?: boolean
    codigo?: boolean
  }

  export type SistemaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "id_area" | "codigo", ExtArgs["result"]["sistema"]>
  export type SistemaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    area?: boolean | AreaDefaultArgs<ExtArgs>
    ativo?: boolean | Sistema$ativoArgs<ExtArgs>
    _count?: boolean | SistemaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SistemaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sistema"
    objects: {
      area: Prisma.$AreaPayload<ExtArgs>
      ativo: Prisma.$AtivoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      id_area: number
      codigo: string
    }, ExtArgs["result"]["sistema"]>
    composites: {}
  }

  type SistemaGetPayload<S extends boolean | null | undefined | SistemaDefaultArgs> = $Result.GetResult<Prisma.$SistemaPayload, S>

  type SistemaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SistemaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SistemaCountAggregateInputType | true
    }

  export interface SistemaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sistema'], meta: { name: 'Sistema' } }
    /**
     * Find zero or one Sistema that matches the filter.
     * @param {SistemaFindUniqueArgs} args - Arguments to find a Sistema
     * @example
     * // Get one Sistema
     * const sistema = await prisma.sistema.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SistemaFindUniqueArgs>(args: SelectSubset<T, SistemaFindUniqueArgs<ExtArgs>>): Prisma__SistemaClient<$Result.GetResult<Prisma.$SistemaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sistema that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SistemaFindUniqueOrThrowArgs} args - Arguments to find a Sistema
     * @example
     * // Get one Sistema
     * const sistema = await prisma.sistema.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SistemaFindUniqueOrThrowArgs>(args: SelectSubset<T, SistemaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SistemaClient<$Result.GetResult<Prisma.$SistemaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sistema that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SistemaFindFirstArgs} args - Arguments to find a Sistema
     * @example
     * // Get one Sistema
     * const sistema = await prisma.sistema.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SistemaFindFirstArgs>(args?: SelectSubset<T, SistemaFindFirstArgs<ExtArgs>>): Prisma__SistemaClient<$Result.GetResult<Prisma.$SistemaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sistema that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SistemaFindFirstOrThrowArgs} args - Arguments to find a Sistema
     * @example
     * // Get one Sistema
     * const sistema = await prisma.sistema.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SistemaFindFirstOrThrowArgs>(args?: SelectSubset<T, SistemaFindFirstOrThrowArgs<ExtArgs>>): Prisma__SistemaClient<$Result.GetResult<Prisma.$SistemaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sistemas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SistemaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sistemas
     * const sistemas = await prisma.sistema.findMany()
     * 
     * // Get first 10 Sistemas
     * const sistemas = await prisma.sistema.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sistemaWithIdOnly = await prisma.sistema.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SistemaFindManyArgs>(args?: SelectSubset<T, SistemaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SistemaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sistema.
     * @param {SistemaCreateArgs} args - Arguments to create a Sistema.
     * @example
     * // Create one Sistema
     * const Sistema = await prisma.sistema.create({
     *   data: {
     *     // ... data to create a Sistema
     *   }
     * })
     * 
     */
    create<T extends SistemaCreateArgs>(args: SelectSubset<T, SistemaCreateArgs<ExtArgs>>): Prisma__SistemaClient<$Result.GetResult<Prisma.$SistemaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sistemas.
     * @param {SistemaCreateManyArgs} args - Arguments to create many Sistemas.
     * @example
     * // Create many Sistemas
     * const sistema = await prisma.sistema.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SistemaCreateManyArgs>(args?: SelectSubset<T, SistemaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sistema.
     * @param {SistemaDeleteArgs} args - Arguments to delete one Sistema.
     * @example
     * // Delete one Sistema
     * const Sistema = await prisma.sistema.delete({
     *   where: {
     *     // ... filter to delete one Sistema
     *   }
     * })
     * 
     */
    delete<T extends SistemaDeleteArgs>(args: SelectSubset<T, SistemaDeleteArgs<ExtArgs>>): Prisma__SistemaClient<$Result.GetResult<Prisma.$SistemaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sistema.
     * @param {SistemaUpdateArgs} args - Arguments to update one Sistema.
     * @example
     * // Update one Sistema
     * const sistema = await prisma.sistema.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SistemaUpdateArgs>(args: SelectSubset<T, SistemaUpdateArgs<ExtArgs>>): Prisma__SistemaClient<$Result.GetResult<Prisma.$SistemaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sistemas.
     * @param {SistemaDeleteManyArgs} args - Arguments to filter Sistemas to delete.
     * @example
     * // Delete a few Sistemas
     * const { count } = await prisma.sistema.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SistemaDeleteManyArgs>(args?: SelectSubset<T, SistemaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sistemas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SistemaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sistemas
     * const sistema = await prisma.sistema.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SistemaUpdateManyArgs>(args: SelectSubset<T, SistemaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sistema.
     * @param {SistemaUpsertArgs} args - Arguments to update or create a Sistema.
     * @example
     * // Update or create a Sistema
     * const sistema = await prisma.sistema.upsert({
     *   create: {
     *     // ... data to create a Sistema
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sistema we want to update
     *   }
     * })
     */
    upsert<T extends SistemaUpsertArgs>(args: SelectSubset<T, SistemaUpsertArgs<ExtArgs>>): Prisma__SistemaClient<$Result.GetResult<Prisma.$SistemaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sistemas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SistemaCountArgs} args - Arguments to filter Sistemas to count.
     * @example
     * // Count the number of Sistemas
     * const count = await prisma.sistema.count({
     *   where: {
     *     // ... the filter for the Sistemas we want to count
     *   }
     * })
    **/
    count<T extends SistemaCountArgs>(
      args?: Subset<T, SistemaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SistemaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sistema.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SistemaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SistemaAggregateArgs>(args: Subset<T, SistemaAggregateArgs>): Prisma.PrismaPromise<GetSistemaAggregateType<T>>

    /**
     * Group by Sistema.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SistemaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SistemaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SistemaGroupByArgs['orderBy'] }
        : { orderBy?: SistemaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SistemaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSistemaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sistema model
   */
  readonly fields: SistemaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sistema.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SistemaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    area<T extends AreaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AreaDefaultArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ativo<T extends Sistema$ativoArgs<ExtArgs> = {}>(args?: Subset<T, Sistema$ativoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtivoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sistema model
   */
  interface SistemaFieldRefs {
    readonly id: FieldRef<"Sistema", 'Int'>
    readonly nome: FieldRef<"Sistema", 'String'>
    readonly id_area: FieldRef<"Sistema", 'Int'>
    readonly codigo: FieldRef<"Sistema", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Sistema findUnique
   */
  export type SistemaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sistema
     */
    select?: SistemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sistema
     */
    omit?: SistemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SistemaInclude<ExtArgs> | null
    /**
     * Filter, which Sistema to fetch.
     */
    where: SistemaWhereUniqueInput
  }

  /**
   * Sistema findUniqueOrThrow
   */
  export type SistemaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sistema
     */
    select?: SistemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sistema
     */
    omit?: SistemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SistemaInclude<ExtArgs> | null
    /**
     * Filter, which Sistema to fetch.
     */
    where: SistemaWhereUniqueInput
  }

  /**
   * Sistema findFirst
   */
  export type SistemaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sistema
     */
    select?: SistemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sistema
     */
    omit?: SistemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SistemaInclude<ExtArgs> | null
    /**
     * Filter, which Sistema to fetch.
     */
    where?: SistemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sistemas to fetch.
     */
    orderBy?: SistemaOrderByWithRelationInput | SistemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sistemas.
     */
    cursor?: SistemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sistemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sistemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sistemas.
     */
    distinct?: SistemaScalarFieldEnum | SistemaScalarFieldEnum[]
  }

  /**
   * Sistema findFirstOrThrow
   */
  export type SistemaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sistema
     */
    select?: SistemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sistema
     */
    omit?: SistemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SistemaInclude<ExtArgs> | null
    /**
     * Filter, which Sistema to fetch.
     */
    where?: SistemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sistemas to fetch.
     */
    orderBy?: SistemaOrderByWithRelationInput | SistemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sistemas.
     */
    cursor?: SistemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sistemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sistemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sistemas.
     */
    distinct?: SistemaScalarFieldEnum | SistemaScalarFieldEnum[]
  }

  /**
   * Sistema findMany
   */
  export type SistemaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sistema
     */
    select?: SistemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sistema
     */
    omit?: SistemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SistemaInclude<ExtArgs> | null
    /**
     * Filter, which Sistemas to fetch.
     */
    where?: SistemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sistemas to fetch.
     */
    orderBy?: SistemaOrderByWithRelationInput | SistemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sistemas.
     */
    cursor?: SistemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sistemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sistemas.
     */
    skip?: number
    distinct?: SistemaScalarFieldEnum | SistemaScalarFieldEnum[]
  }

  /**
   * Sistema create
   */
  export type SistemaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sistema
     */
    select?: SistemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sistema
     */
    omit?: SistemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SistemaInclude<ExtArgs> | null
    /**
     * The data needed to create a Sistema.
     */
    data: XOR<SistemaCreateInput, SistemaUncheckedCreateInput>
  }

  /**
   * Sistema createMany
   */
  export type SistemaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sistemas.
     */
    data: SistemaCreateManyInput | SistemaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sistema update
   */
  export type SistemaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sistema
     */
    select?: SistemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sistema
     */
    omit?: SistemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SistemaInclude<ExtArgs> | null
    /**
     * The data needed to update a Sistema.
     */
    data: XOR<SistemaUpdateInput, SistemaUncheckedUpdateInput>
    /**
     * Choose, which Sistema to update.
     */
    where: SistemaWhereUniqueInput
  }

  /**
   * Sistema updateMany
   */
  export type SistemaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sistemas.
     */
    data: XOR<SistemaUpdateManyMutationInput, SistemaUncheckedUpdateManyInput>
    /**
     * Filter which Sistemas to update
     */
    where?: SistemaWhereInput
    /**
     * Limit how many Sistemas to update.
     */
    limit?: number
  }

  /**
   * Sistema upsert
   */
  export type SistemaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sistema
     */
    select?: SistemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sistema
     */
    omit?: SistemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SistemaInclude<ExtArgs> | null
    /**
     * The filter to search for the Sistema to update in case it exists.
     */
    where: SistemaWhereUniqueInput
    /**
     * In case the Sistema found by the `where` argument doesn't exist, create a new Sistema with this data.
     */
    create: XOR<SistemaCreateInput, SistemaUncheckedCreateInput>
    /**
     * In case the Sistema was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SistemaUpdateInput, SistemaUncheckedUpdateInput>
  }

  /**
   * Sistema delete
   */
  export type SistemaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sistema
     */
    select?: SistemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sistema
     */
    omit?: SistemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SistemaInclude<ExtArgs> | null
    /**
     * Filter which Sistema to delete.
     */
    where: SistemaWhereUniqueInput
  }

  /**
   * Sistema deleteMany
   */
  export type SistemaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sistemas to delete
     */
    where?: SistemaWhereInput
    /**
     * Limit how many Sistemas to delete.
     */
    limit?: number
  }

  /**
   * Sistema.ativo
   */
  export type Sistema$ativoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ativo
     */
    select?: AtivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ativo
     */
    omit?: AtivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtivoInclude<ExtArgs> | null
    where?: AtivoWhereInput
    orderBy?: AtivoOrderByWithRelationInput | AtivoOrderByWithRelationInput[]
    cursor?: AtivoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AtivoScalarFieldEnum | AtivoScalarFieldEnum[]
  }

  /**
   * Sistema without action
   */
  export type SistemaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sistema
     */
    select?: SistemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sistema
     */
    omit?: SistemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SistemaInclude<ExtArgs> | null
  }


  /**
   * Model Ativo
   */

  export type AggregateAtivo = {
    _count: AtivoCountAggregateOutputType | null
    _avg: AtivoAvgAggregateOutputType | null
    _sum: AtivoSumAggregateOutputType | null
    _min: AtivoMinAggregateOutputType | null
    _max: AtivoMaxAggregateOutputType | null
  }

  export type AtivoAvgAggregateOutputType = {
    id: number | null
    id_sistema: number | null
  }

  export type AtivoSumAggregateOutputType = {
    id: number | null
    id_sistema: number | null
  }

  export type AtivoMinAggregateOutputType = {
    id: number | null
    nome: string | null
    codigo_patrimonio: string | null
    fabricante: string | null
    modelo: string | null
    data_aquisicao: Date | null
    localizacao_interna: string | null
    tipo_ativo: $Enums.TipoAtivo | null
    situacao: $Enums.SituacaoAtivo | null
    criticidade: $Enums.Criticidade | null
    id_sistema: number | null
    codigo: string | null
  }

  export type AtivoMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    codigo_patrimonio: string | null
    fabricante: string | null
    modelo: string | null
    data_aquisicao: Date | null
    localizacao_interna: string | null
    tipo_ativo: $Enums.TipoAtivo | null
    situacao: $Enums.SituacaoAtivo | null
    criticidade: $Enums.Criticidade | null
    id_sistema: number | null
    codigo: string | null
  }

  export type AtivoCountAggregateOutputType = {
    id: number
    nome: number
    codigo_patrimonio: number
    fabricante: number
    modelo: number
    data_aquisicao: number
    localizacao_interna: number
    tipo_ativo: number
    situacao: number
    criticidade: number
    id_sistema: number
    codigo: number
    _all: number
  }


  export type AtivoAvgAggregateInputType = {
    id?: true
    id_sistema?: true
  }

  export type AtivoSumAggregateInputType = {
    id?: true
    id_sistema?: true
  }

  export type AtivoMinAggregateInputType = {
    id?: true
    nome?: true
    codigo_patrimonio?: true
    fabricante?: true
    modelo?: true
    data_aquisicao?: true
    localizacao_interna?: true
    tipo_ativo?: true
    situacao?: true
    criticidade?: true
    id_sistema?: true
    codigo?: true
  }

  export type AtivoMaxAggregateInputType = {
    id?: true
    nome?: true
    codigo_patrimonio?: true
    fabricante?: true
    modelo?: true
    data_aquisicao?: true
    localizacao_interna?: true
    tipo_ativo?: true
    situacao?: true
    criticidade?: true
    id_sistema?: true
    codigo?: true
  }

  export type AtivoCountAggregateInputType = {
    id?: true
    nome?: true
    codigo_patrimonio?: true
    fabricante?: true
    modelo?: true
    data_aquisicao?: true
    localizacao_interna?: true
    tipo_ativo?: true
    situacao?: true
    criticidade?: true
    id_sistema?: true
    codigo?: true
    _all?: true
  }

  export type AtivoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ativo to aggregate.
     */
    where?: AtivoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ativos to fetch.
     */
    orderBy?: AtivoOrderByWithRelationInput | AtivoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AtivoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ativos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ativos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ativos
    **/
    _count?: true | AtivoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AtivoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AtivoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AtivoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AtivoMaxAggregateInputType
  }

  export type GetAtivoAggregateType<T extends AtivoAggregateArgs> = {
        [P in keyof T & keyof AggregateAtivo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAtivo[P]>
      : GetScalarType<T[P], AggregateAtivo[P]>
  }




  export type AtivoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtivoWhereInput
    orderBy?: AtivoOrderByWithAggregationInput | AtivoOrderByWithAggregationInput[]
    by: AtivoScalarFieldEnum[] | AtivoScalarFieldEnum
    having?: AtivoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AtivoCountAggregateInputType | true
    _avg?: AtivoAvgAggregateInputType
    _sum?: AtivoSumAggregateInputType
    _min?: AtivoMinAggregateInputType
    _max?: AtivoMaxAggregateInputType
  }

  export type AtivoGroupByOutputType = {
    id: number
    nome: string
    codigo_patrimonio: string
    fabricante: string
    modelo: string
    data_aquisicao: Date | null
    localizacao_interna: string | null
    tipo_ativo: $Enums.TipoAtivo
    situacao: $Enums.SituacaoAtivo
    criticidade: $Enums.Criticidade
    id_sistema: number
    codigo: string
    _count: AtivoCountAggregateOutputType | null
    _avg: AtivoAvgAggregateOutputType | null
    _sum: AtivoSumAggregateOutputType | null
    _min: AtivoMinAggregateOutputType | null
    _max: AtivoMaxAggregateOutputType | null
  }

  type GetAtivoGroupByPayload<T extends AtivoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AtivoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AtivoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AtivoGroupByOutputType[P]>
            : GetScalarType<T[P], AtivoGroupByOutputType[P]>
        }
      >
    >


  export type AtivoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    codigo_patrimonio?: boolean
    fabricante?: boolean
    modelo?: boolean
    data_aquisicao?: boolean
    localizacao_interna?: boolean
    tipo_ativo?: boolean
    situacao?: boolean
    criticidade?: boolean
    id_sistema?: boolean
    codigo?: boolean
    sistema?: boolean | SistemaDefaultArgs<ExtArgs>
    subativos?: boolean | Ativo$subativosArgs<ExtArgs>
    manutencoes?: boolean | Ativo$manutencoesArgs<ExtArgs>
    falhas?: boolean | Ativo$falhasArgs<ExtArgs>
    _count?: boolean | AtivoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ativo"]>



  export type AtivoSelectScalar = {
    id?: boolean
    nome?: boolean
    codigo_patrimonio?: boolean
    fabricante?: boolean
    modelo?: boolean
    data_aquisicao?: boolean
    localizacao_interna?: boolean
    tipo_ativo?: boolean
    situacao?: boolean
    criticidade?: boolean
    id_sistema?: boolean
    codigo?: boolean
  }

  export type AtivoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "codigo_patrimonio" | "fabricante" | "modelo" | "data_aquisicao" | "localizacao_interna" | "tipo_ativo" | "situacao" | "criticidade" | "id_sistema" | "codigo", ExtArgs["result"]["ativo"]>
  export type AtivoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sistema?: boolean | SistemaDefaultArgs<ExtArgs>
    subativos?: boolean | Ativo$subativosArgs<ExtArgs>
    manutencoes?: boolean | Ativo$manutencoesArgs<ExtArgs>
    falhas?: boolean | Ativo$falhasArgs<ExtArgs>
    _count?: boolean | AtivoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AtivoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ativo"
    objects: {
      sistema: Prisma.$SistemaPayload<ExtArgs>
      subativos: Prisma.$SubativoPayload<ExtArgs>[]
      manutencoes: Prisma.$ManutencaoPayload<ExtArgs>[]
      falhas: Prisma.$FalhaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      codigo_patrimonio: string
      fabricante: string
      modelo: string
      data_aquisicao: Date | null
      localizacao_interna: string | null
      tipo_ativo: $Enums.TipoAtivo
      situacao: $Enums.SituacaoAtivo
      criticidade: $Enums.Criticidade
      id_sistema: number
      codigo: string
    }, ExtArgs["result"]["ativo"]>
    composites: {}
  }

  type AtivoGetPayload<S extends boolean | null | undefined | AtivoDefaultArgs> = $Result.GetResult<Prisma.$AtivoPayload, S>

  type AtivoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AtivoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AtivoCountAggregateInputType | true
    }

  export interface AtivoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ativo'], meta: { name: 'Ativo' } }
    /**
     * Find zero or one Ativo that matches the filter.
     * @param {AtivoFindUniqueArgs} args - Arguments to find a Ativo
     * @example
     * // Get one Ativo
     * const ativo = await prisma.ativo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AtivoFindUniqueArgs>(args: SelectSubset<T, AtivoFindUniqueArgs<ExtArgs>>): Prisma__AtivoClient<$Result.GetResult<Prisma.$AtivoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ativo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AtivoFindUniqueOrThrowArgs} args - Arguments to find a Ativo
     * @example
     * // Get one Ativo
     * const ativo = await prisma.ativo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AtivoFindUniqueOrThrowArgs>(args: SelectSubset<T, AtivoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AtivoClient<$Result.GetResult<Prisma.$AtivoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ativo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtivoFindFirstArgs} args - Arguments to find a Ativo
     * @example
     * // Get one Ativo
     * const ativo = await prisma.ativo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AtivoFindFirstArgs>(args?: SelectSubset<T, AtivoFindFirstArgs<ExtArgs>>): Prisma__AtivoClient<$Result.GetResult<Prisma.$AtivoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ativo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtivoFindFirstOrThrowArgs} args - Arguments to find a Ativo
     * @example
     * // Get one Ativo
     * const ativo = await prisma.ativo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AtivoFindFirstOrThrowArgs>(args?: SelectSubset<T, AtivoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AtivoClient<$Result.GetResult<Prisma.$AtivoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ativos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtivoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ativos
     * const ativos = await prisma.ativo.findMany()
     * 
     * // Get first 10 Ativos
     * const ativos = await prisma.ativo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ativoWithIdOnly = await prisma.ativo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AtivoFindManyArgs>(args?: SelectSubset<T, AtivoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtivoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ativo.
     * @param {AtivoCreateArgs} args - Arguments to create a Ativo.
     * @example
     * // Create one Ativo
     * const Ativo = await prisma.ativo.create({
     *   data: {
     *     // ... data to create a Ativo
     *   }
     * })
     * 
     */
    create<T extends AtivoCreateArgs>(args: SelectSubset<T, AtivoCreateArgs<ExtArgs>>): Prisma__AtivoClient<$Result.GetResult<Prisma.$AtivoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ativos.
     * @param {AtivoCreateManyArgs} args - Arguments to create many Ativos.
     * @example
     * // Create many Ativos
     * const ativo = await prisma.ativo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AtivoCreateManyArgs>(args?: SelectSubset<T, AtivoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ativo.
     * @param {AtivoDeleteArgs} args - Arguments to delete one Ativo.
     * @example
     * // Delete one Ativo
     * const Ativo = await prisma.ativo.delete({
     *   where: {
     *     // ... filter to delete one Ativo
     *   }
     * })
     * 
     */
    delete<T extends AtivoDeleteArgs>(args: SelectSubset<T, AtivoDeleteArgs<ExtArgs>>): Prisma__AtivoClient<$Result.GetResult<Prisma.$AtivoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ativo.
     * @param {AtivoUpdateArgs} args - Arguments to update one Ativo.
     * @example
     * // Update one Ativo
     * const ativo = await prisma.ativo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AtivoUpdateArgs>(args: SelectSubset<T, AtivoUpdateArgs<ExtArgs>>): Prisma__AtivoClient<$Result.GetResult<Prisma.$AtivoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ativos.
     * @param {AtivoDeleteManyArgs} args - Arguments to filter Ativos to delete.
     * @example
     * // Delete a few Ativos
     * const { count } = await prisma.ativo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AtivoDeleteManyArgs>(args?: SelectSubset<T, AtivoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ativos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtivoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ativos
     * const ativo = await prisma.ativo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AtivoUpdateManyArgs>(args: SelectSubset<T, AtivoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ativo.
     * @param {AtivoUpsertArgs} args - Arguments to update or create a Ativo.
     * @example
     * // Update or create a Ativo
     * const ativo = await prisma.ativo.upsert({
     *   create: {
     *     // ... data to create a Ativo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ativo we want to update
     *   }
     * })
     */
    upsert<T extends AtivoUpsertArgs>(args: SelectSubset<T, AtivoUpsertArgs<ExtArgs>>): Prisma__AtivoClient<$Result.GetResult<Prisma.$AtivoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ativos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtivoCountArgs} args - Arguments to filter Ativos to count.
     * @example
     * // Count the number of Ativos
     * const count = await prisma.ativo.count({
     *   where: {
     *     // ... the filter for the Ativos we want to count
     *   }
     * })
    **/
    count<T extends AtivoCountArgs>(
      args?: Subset<T, AtivoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AtivoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ativo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtivoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AtivoAggregateArgs>(args: Subset<T, AtivoAggregateArgs>): Prisma.PrismaPromise<GetAtivoAggregateType<T>>

    /**
     * Group by Ativo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtivoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AtivoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AtivoGroupByArgs['orderBy'] }
        : { orderBy?: AtivoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AtivoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAtivoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ativo model
   */
  readonly fields: AtivoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ativo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AtivoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sistema<T extends SistemaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SistemaDefaultArgs<ExtArgs>>): Prisma__SistemaClient<$Result.GetResult<Prisma.$SistemaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subativos<T extends Ativo$subativosArgs<ExtArgs> = {}>(args?: Subset<T, Ativo$subativosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubativoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    manutencoes<T extends Ativo$manutencoesArgs<ExtArgs> = {}>(args?: Subset<T, Ativo$manutencoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManutencaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    falhas<T extends Ativo$falhasArgs<ExtArgs> = {}>(args?: Subset<T, Ativo$falhasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FalhaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ativo model
   */
  interface AtivoFieldRefs {
    readonly id: FieldRef<"Ativo", 'Int'>
    readonly nome: FieldRef<"Ativo", 'String'>
    readonly codigo_patrimonio: FieldRef<"Ativo", 'String'>
    readonly fabricante: FieldRef<"Ativo", 'String'>
    readonly modelo: FieldRef<"Ativo", 'String'>
    readonly data_aquisicao: FieldRef<"Ativo", 'DateTime'>
    readonly localizacao_interna: FieldRef<"Ativo", 'String'>
    readonly tipo_ativo: FieldRef<"Ativo", 'TipoAtivo'>
    readonly situacao: FieldRef<"Ativo", 'SituacaoAtivo'>
    readonly criticidade: FieldRef<"Ativo", 'Criticidade'>
    readonly id_sistema: FieldRef<"Ativo", 'Int'>
    readonly codigo: FieldRef<"Ativo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Ativo findUnique
   */
  export type AtivoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ativo
     */
    select?: AtivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ativo
     */
    omit?: AtivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtivoInclude<ExtArgs> | null
    /**
     * Filter, which Ativo to fetch.
     */
    where: AtivoWhereUniqueInput
  }

  /**
   * Ativo findUniqueOrThrow
   */
  export type AtivoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ativo
     */
    select?: AtivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ativo
     */
    omit?: AtivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtivoInclude<ExtArgs> | null
    /**
     * Filter, which Ativo to fetch.
     */
    where: AtivoWhereUniqueInput
  }

  /**
   * Ativo findFirst
   */
  export type AtivoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ativo
     */
    select?: AtivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ativo
     */
    omit?: AtivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtivoInclude<ExtArgs> | null
    /**
     * Filter, which Ativo to fetch.
     */
    where?: AtivoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ativos to fetch.
     */
    orderBy?: AtivoOrderByWithRelationInput | AtivoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ativos.
     */
    cursor?: AtivoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ativos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ativos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ativos.
     */
    distinct?: AtivoScalarFieldEnum | AtivoScalarFieldEnum[]
  }

  /**
   * Ativo findFirstOrThrow
   */
  export type AtivoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ativo
     */
    select?: AtivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ativo
     */
    omit?: AtivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtivoInclude<ExtArgs> | null
    /**
     * Filter, which Ativo to fetch.
     */
    where?: AtivoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ativos to fetch.
     */
    orderBy?: AtivoOrderByWithRelationInput | AtivoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ativos.
     */
    cursor?: AtivoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ativos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ativos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ativos.
     */
    distinct?: AtivoScalarFieldEnum | AtivoScalarFieldEnum[]
  }

  /**
   * Ativo findMany
   */
  export type AtivoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ativo
     */
    select?: AtivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ativo
     */
    omit?: AtivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtivoInclude<ExtArgs> | null
    /**
     * Filter, which Ativos to fetch.
     */
    where?: AtivoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ativos to fetch.
     */
    orderBy?: AtivoOrderByWithRelationInput | AtivoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ativos.
     */
    cursor?: AtivoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ativos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ativos.
     */
    skip?: number
    distinct?: AtivoScalarFieldEnum | AtivoScalarFieldEnum[]
  }

  /**
   * Ativo create
   */
  export type AtivoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ativo
     */
    select?: AtivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ativo
     */
    omit?: AtivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtivoInclude<ExtArgs> | null
    /**
     * The data needed to create a Ativo.
     */
    data: XOR<AtivoCreateInput, AtivoUncheckedCreateInput>
  }

  /**
   * Ativo createMany
   */
  export type AtivoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ativos.
     */
    data: AtivoCreateManyInput | AtivoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ativo update
   */
  export type AtivoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ativo
     */
    select?: AtivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ativo
     */
    omit?: AtivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtivoInclude<ExtArgs> | null
    /**
     * The data needed to update a Ativo.
     */
    data: XOR<AtivoUpdateInput, AtivoUncheckedUpdateInput>
    /**
     * Choose, which Ativo to update.
     */
    where: AtivoWhereUniqueInput
  }

  /**
   * Ativo updateMany
   */
  export type AtivoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ativos.
     */
    data: XOR<AtivoUpdateManyMutationInput, AtivoUncheckedUpdateManyInput>
    /**
     * Filter which Ativos to update
     */
    where?: AtivoWhereInput
    /**
     * Limit how many Ativos to update.
     */
    limit?: number
  }

  /**
   * Ativo upsert
   */
  export type AtivoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ativo
     */
    select?: AtivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ativo
     */
    omit?: AtivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtivoInclude<ExtArgs> | null
    /**
     * The filter to search for the Ativo to update in case it exists.
     */
    where: AtivoWhereUniqueInput
    /**
     * In case the Ativo found by the `where` argument doesn't exist, create a new Ativo with this data.
     */
    create: XOR<AtivoCreateInput, AtivoUncheckedCreateInput>
    /**
     * In case the Ativo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AtivoUpdateInput, AtivoUncheckedUpdateInput>
  }

  /**
   * Ativo delete
   */
  export type AtivoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ativo
     */
    select?: AtivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ativo
     */
    omit?: AtivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtivoInclude<ExtArgs> | null
    /**
     * Filter which Ativo to delete.
     */
    where: AtivoWhereUniqueInput
  }

  /**
   * Ativo deleteMany
   */
  export type AtivoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ativos to delete
     */
    where?: AtivoWhereInput
    /**
     * Limit how many Ativos to delete.
     */
    limit?: number
  }

  /**
   * Ativo.subativos
   */
  export type Ativo$subativosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subativo
     */
    select?: SubativoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subativo
     */
    omit?: SubativoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubativoInclude<ExtArgs> | null
    where?: SubativoWhereInput
    orderBy?: SubativoOrderByWithRelationInput | SubativoOrderByWithRelationInput[]
    cursor?: SubativoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubativoScalarFieldEnum | SubativoScalarFieldEnum[]
  }

  /**
   * Ativo.manutencoes
   */
  export type Ativo$manutencoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manutencao
     */
    select?: ManutencaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manutencao
     */
    omit?: ManutencaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManutencaoInclude<ExtArgs> | null
    where?: ManutencaoWhereInput
    orderBy?: ManutencaoOrderByWithRelationInput | ManutencaoOrderByWithRelationInput[]
    cursor?: ManutencaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ManutencaoScalarFieldEnum | ManutencaoScalarFieldEnum[]
  }

  /**
   * Ativo.falhas
   */
  export type Ativo$falhasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Falha
     */
    select?: FalhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Falha
     */
    omit?: FalhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FalhaInclude<ExtArgs> | null
    where?: FalhaWhereInput
    orderBy?: FalhaOrderByWithRelationInput | FalhaOrderByWithRelationInput[]
    cursor?: FalhaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FalhaScalarFieldEnum | FalhaScalarFieldEnum[]
  }

  /**
   * Ativo without action
   */
  export type AtivoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ativo
     */
    select?: AtivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ativo
     */
    omit?: AtivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtivoInclude<ExtArgs> | null
  }


  /**
   * Model Falha
   */

  export type AggregateFalha = {
    _count: FalhaCountAggregateOutputType | null
    _avg: FalhaAvgAggregateOutputType | null
    _sum: FalhaSumAggregateOutputType | null
    _min: FalhaMinAggregateOutputType | null
    _max: FalhaMaxAggregateOutputType | null
  }

  export type FalhaAvgAggregateOutputType = {
    id: number | null
    id_ativo: number | null
  }

  export type FalhaSumAggregateOutputType = {
    id: number | null
    id_ativo: number | null
  }

  export type FalhaMinAggregateOutputType = {
    id: number | null
    descricao: string | null
    data_ocorrencia: Date | null
    criticidade: $Enums.Criticidade | null
    id_ativo: number | null
  }

  export type FalhaMaxAggregateOutputType = {
    id: number | null
    descricao: string | null
    data_ocorrencia: Date | null
    criticidade: $Enums.Criticidade | null
    id_ativo: number | null
  }

  export type FalhaCountAggregateOutputType = {
    id: number
    descricao: number
    data_ocorrencia: number
    criticidade: number
    id_ativo: number
    _all: number
  }


  export type FalhaAvgAggregateInputType = {
    id?: true
    id_ativo?: true
  }

  export type FalhaSumAggregateInputType = {
    id?: true
    id_ativo?: true
  }

  export type FalhaMinAggregateInputType = {
    id?: true
    descricao?: true
    data_ocorrencia?: true
    criticidade?: true
    id_ativo?: true
  }

  export type FalhaMaxAggregateInputType = {
    id?: true
    descricao?: true
    data_ocorrencia?: true
    criticidade?: true
    id_ativo?: true
  }

  export type FalhaCountAggregateInputType = {
    id?: true
    descricao?: true
    data_ocorrencia?: true
    criticidade?: true
    id_ativo?: true
    _all?: true
  }

  export type FalhaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Falha to aggregate.
     */
    where?: FalhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Falhas to fetch.
     */
    orderBy?: FalhaOrderByWithRelationInput | FalhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FalhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Falhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Falhas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Falhas
    **/
    _count?: true | FalhaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FalhaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FalhaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FalhaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FalhaMaxAggregateInputType
  }

  export type GetFalhaAggregateType<T extends FalhaAggregateArgs> = {
        [P in keyof T & keyof AggregateFalha]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFalha[P]>
      : GetScalarType<T[P], AggregateFalha[P]>
  }




  export type FalhaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FalhaWhereInput
    orderBy?: FalhaOrderByWithAggregationInput | FalhaOrderByWithAggregationInput[]
    by: FalhaScalarFieldEnum[] | FalhaScalarFieldEnum
    having?: FalhaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FalhaCountAggregateInputType | true
    _avg?: FalhaAvgAggregateInputType
    _sum?: FalhaSumAggregateInputType
    _min?: FalhaMinAggregateInputType
    _max?: FalhaMaxAggregateInputType
  }

  export type FalhaGroupByOutputType = {
    id: number
    descricao: string
    data_ocorrencia: Date
    criticidade: $Enums.Criticidade
    id_ativo: number
    _count: FalhaCountAggregateOutputType | null
    _avg: FalhaAvgAggregateOutputType | null
    _sum: FalhaSumAggregateOutputType | null
    _min: FalhaMinAggregateOutputType | null
    _max: FalhaMaxAggregateOutputType | null
  }

  type GetFalhaGroupByPayload<T extends FalhaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FalhaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FalhaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FalhaGroupByOutputType[P]>
            : GetScalarType<T[P], FalhaGroupByOutputType[P]>
        }
      >
    >


  export type FalhaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    data_ocorrencia?: boolean
    criticidade?: boolean
    id_ativo?: boolean
    ativo?: boolean | AtivoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["falha"]>



  export type FalhaSelectScalar = {
    id?: boolean
    descricao?: boolean
    data_ocorrencia?: boolean
    criticidade?: boolean
    id_ativo?: boolean
  }

  export type FalhaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "descricao" | "data_ocorrencia" | "criticidade" | "id_ativo", ExtArgs["result"]["falha"]>
  export type FalhaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ativo?: boolean | AtivoDefaultArgs<ExtArgs>
  }

  export type $FalhaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Falha"
    objects: {
      ativo: Prisma.$AtivoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      descricao: string
      data_ocorrencia: Date
      criticidade: $Enums.Criticidade
      id_ativo: number
    }, ExtArgs["result"]["falha"]>
    composites: {}
  }

  type FalhaGetPayload<S extends boolean | null | undefined | FalhaDefaultArgs> = $Result.GetResult<Prisma.$FalhaPayload, S>

  type FalhaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FalhaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FalhaCountAggregateInputType | true
    }

  export interface FalhaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Falha'], meta: { name: 'Falha' } }
    /**
     * Find zero or one Falha that matches the filter.
     * @param {FalhaFindUniqueArgs} args - Arguments to find a Falha
     * @example
     * // Get one Falha
     * const falha = await prisma.falha.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FalhaFindUniqueArgs>(args: SelectSubset<T, FalhaFindUniqueArgs<ExtArgs>>): Prisma__FalhaClient<$Result.GetResult<Prisma.$FalhaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Falha that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FalhaFindUniqueOrThrowArgs} args - Arguments to find a Falha
     * @example
     * // Get one Falha
     * const falha = await prisma.falha.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FalhaFindUniqueOrThrowArgs>(args: SelectSubset<T, FalhaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FalhaClient<$Result.GetResult<Prisma.$FalhaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Falha that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FalhaFindFirstArgs} args - Arguments to find a Falha
     * @example
     * // Get one Falha
     * const falha = await prisma.falha.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FalhaFindFirstArgs>(args?: SelectSubset<T, FalhaFindFirstArgs<ExtArgs>>): Prisma__FalhaClient<$Result.GetResult<Prisma.$FalhaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Falha that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FalhaFindFirstOrThrowArgs} args - Arguments to find a Falha
     * @example
     * // Get one Falha
     * const falha = await prisma.falha.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FalhaFindFirstOrThrowArgs>(args?: SelectSubset<T, FalhaFindFirstOrThrowArgs<ExtArgs>>): Prisma__FalhaClient<$Result.GetResult<Prisma.$FalhaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Falhas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FalhaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Falhas
     * const falhas = await prisma.falha.findMany()
     * 
     * // Get first 10 Falhas
     * const falhas = await prisma.falha.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const falhaWithIdOnly = await prisma.falha.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FalhaFindManyArgs>(args?: SelectSubset<T, FalhaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FalhaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Falha.
     * @param {FalhaCreateArgs} args - Arguments to create a Falha.
     * @example
     * // Create one Falha
     * const Falha = await prisma.falha.create({
     *   data: {
     *     // ... data to create a Falha
     *   }
     * })
     * 
     */
    create<T extends FalhaCreateArgs>(args: SelectSubset<T, FalhaCreateArgs<ExtArgs>>): Prisma__FalhaClient<$Result.GetResult<Prisma.$FalhaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Falhas.
     * @param {FalhaCreateManyArgs} args - Arguments to create many Falhas.
     * @example
     * // Create many Falhas
     * const falha = await prisma.falha.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FalhaCreateManyArgs>(args?: SelectSubset<T, FalhaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Falha.
     * @param {FalhaDeleteArgs} args - Arguments to delete one Falha.
     * @example
     * // Delete one Falha
     * const Falha = await prisma.falha.delete({
     *   where: {
     *     // ... filter to delete one Falha
     *   }
     * })
     * 
     */
    delete<T extends FalhaDeleteArgs>(args: SelectSubset<T, FalhaDeleteArgs<ExtArgs>>): Prisma__FalhaClient<$Result.GetResult<Prisma.$FalhaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Falha.
     * @param {FalhaUpdateArgs} args - Arguments to update one Falha.
     * @example
     * // Update one Falha
     * const falha = await prisma.falha.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FalhaUpdateArgs>(args: SelectSubset<T, FalhaUpdateArgs<ExtArgs>>): Prisma__FalhaClient<$Result.GetResult<Prisma.$FalhaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Falhas.
     * @param {FalhaDeleteManyArgs} args - Arguments to filter Falhas to delete.
     * @example
     * // Delete a few Falhas
     * const { count } = await prisma.falha.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FalhaDeleteManyArgs>(args?: SelectSubset<T, FalhaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Falhas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FalhaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Falhas
     * const falha = await prisma.falha.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FalhaUpdateManyArgs>(args: SelectSubset<T, FalhaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Falha.
     * @param {FalhaUpsertArgs} args - Arguments to update or create a Falha.
     * @example
     * // Update or create a Falha
     * const falha = await prisma.falha.upsert({
     *   create: {
     *     // ... data to create a Falha
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Falha we want to update
     *   }
     * })
     */
    upsert<T extends FalhaUpsertArgs>(args: SelectSubset<T, FalhaUpsertArgs<ExtArgs>>): Prisma__FalhaClient<$Result.GetResult<Prisma.$FalhaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Falhas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FalhaCountArgs} args - Arguments to filter Falhas to count.
     * @example
     * // Count the number of Falhas
     * const count = await prisma.falha.count({
     *   where: {
     *     // ... the filter for the Falhas we want to count
     *   }
     * })
    **/
    count<T extends FalhaCountArgs>(
      args?: Subset<T, FalhaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FalhaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Falha.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FalhaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FalhaAggregateArgs>(args: Subset<T, FalhaAggregateArgs>): Prisma.PrismaPromise<GetFalhaAggregateType<T>>

    /**
     * Group by Falha.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FalhaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FalhaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FalhaGroupByArgs['orderBy'] }
        : { orderBy?: FalhaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FalhaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFalhaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Falha model
   */
  readonly fields: FalhaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Falha.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FalhaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ativo<T extends AtivoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AtivoDefaultArgs<ExtArgs>>): Prisma__AtivoClient<$Result.GetResult<Prisma.$AtivoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Falha model
   */
  interface FalhaFieldRefs {
    readonly id: FieldRef<"Falha", 'Int'>
    readonly descricao: FieldRef<"Falha", 'String'>
    readonly data_ocorrencia: FieldRef<"Falha", 'DateTime'>
    readonly criticidade: FieldRef<"Falha", 'Criticidade'>
    readonly id_ativo: FieldRef<"Falha", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Falha findUnique
   */
  export type FalhaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Falha
     */
    select?: FalhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Falha
     */
    omit?: FalhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FalhaInclude<ExtArgs> | null
    /**
     * Filter, which Falha to fetch.
     */
    where: FalhaWhereUniqueInput
  }

  /**
   * Falha findUniqueOrThrow
   */
  export type FalhaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Falha
     */
    select?: FalhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Falha
     */
    omit?: FalhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FalhaInclude<ExtArgs> | null
    /**
     * Filter, which Falha to fetch.
     */
    where: FalhaWhereUniqueInput
  }

  /**
   * Falha findFirst
   */
  export type FalhaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Falha
     */
    select?: FalhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Falha
     */
    omit?: FalhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FalhaInclude<ExtArgs> | null
    /**
     * Filter, which Falha to fetch.
     */
    where?: FalhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Falhas to fetch.
     */
    orderBy?: FalhaOrderByWithRelationInput | FalhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Falhas.
     */
    cursor?: FalhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Falhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Falhas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Falhas.
     */
    distinct?: FalhaScalarFieldEnum | FalhaScalarFieldEnum[]
  }

  /**
   * Falha findFirstOrThrow
   */
  export type FalhaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Falha
     */
    select?: FalhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Falha
     */
    omit?: FalhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FalhaInclude<ExtArgs> | null
    /**
     * Filter, which Falha to fetch.
     */
    where?: FalhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Falhas to fetch.
     */
    orderBy?: FalhaOrderByWithRelationInput | FalhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Falhas.
     */
    cursor?: FalhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Falhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Falhas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Falhas.
     */
    distinct?: FalhaScalarFieldEnum | FalhaScalarFieldEnum[]
  }

  /**
   * Falha findMany
   */
  export type FalhaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Falha
     */
    select?: FalhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Falha
     */
    omit?: FalhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FalhaInclude<ExtArgs> | null
    /**
     * Filter, which Falhas to fetch.
     */
    where?: FalhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Falhas to fetch.
     */
    orderBy?: FalhaOrderByWithRelationInput | FalhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Falhas.
     */
    cursor?: FalhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Falhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Falhas.
     */
    skip?: number
    distinct?: FalhaScalarFieldEnum | FalhaScalarFieldEnum[]
  }

  /**
   * Falha create
   */
  export type FalhaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Falha
     */
    select?: FalhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Falha
     */
    omit?: FalhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FalhaInclude<ExtArgs> | null
    /**
     * The data needed to create a Falha.
     */
    data: XOR<FalhaCreateInput, FalhaUncheckedCreateInput>
  }

  /**
   * Falha createMany
   */
  export type FalhaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Falhas.
     */
    data: FalhaCreateManyInput | FalhaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Falha update
   */
  export type FalhaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Falha
     */
    select?: FalhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Falha
     */
    omit?: FalhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FalhaInclude<ExtArgs> | null
    /**
     * The data needed to update a Falha.
     */
    data: XOR<FalhaUpdateInput, FalhaUncheckedUpdateInput>
    /**
     * Choose, which Falha to update.
     */
    where: FalhaWhereUniqueInput
  }

  /**
   * Falha updateMany
   */
  export type FalhaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Falhas.
     */
    data: XOR<FalhaUpdateManyMutationInput, FalhaUncheckedUpdateManyInput>
    /**
     * Filter which Falhas to update
     */
    where?: FalhaWhereInput
    /**
     * Limit how many Falhas to update.
     */
    limit?: number
  }

  /**
   * Falha upsert
   */
  export type FalhaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Falha
     */
    select?: FalhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Falha
     */
    omit?: FalhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FalhaInclude<ExtArgs> | null
    /**
     * The filter to search for the Falha to update in case it exists.
     */
    where: FalhaWhereUniqueInput
    /**
     * In case the Falha found by the `where` argument doesn't exist, create a new Falha with this data.
     */
    create: XOR<FalhaCreateInput, FalhaUncheckedCreateInput>
    /**
     * In case the Falha was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FalhaUpdateInput, FalhaUncheckedUpdateInput>
  }

  /**
   * Falha delete
   */
  export type FalhaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Falha
     */
    select?: FalhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Falha
     */
    omit?: FalhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FalhaInclude<ExtArgs> | null
    /**
     * Filter which Falha to delete.
     */
    where: FalhaWhereUniqueInput
  }

  /**
   * Falha deleteMany
   */
  export type FalhaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Falhas to delete
     */
    where?: FalhaWhereInput
    /**
     * Limit how many Falhas to delete.
     */
    limit?: number
  }

  /**
   * Falha without action
   */
  export type FalhaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Falha
     */
    select?: FalhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Falha
     */
    omit?: FalhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FalhaInclude<ExtArgs> | null
  }


  /**
   * Model Subativo
   */

  export type AggregateSubativo = {
    _count: SubativoCountAggregateOutputType | null
    _avg: SubativoAvgAggregateOutputType | null
    _sum: SubativoSumAggregateOutputType | null
    _min: SubativoMinAggregateOutputType | null
    _max: SubativoMaxAggregateOutputType | null
  }

  export type SubativoAvgAggregateOutputType = {
    id: number | null
    id_ativo: number | null
  }

  export type SubativoSumAggregateOutputType = {
    id: number | null
    id_ativo: number | null
  }

  export type SubativoMinAggregateOutputType = {
    id: number | null
    nome: string | null
    tipo: string | null
    id_ativo: number | null
  }

  export type SubativoMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    tipo: string | null
    id_ativo: number | null
  }

  export type SubativoCountAggregateOutputType = {
    id: number
    nome: number
    tipo: number
    id_ativo: number
    _all: number
  }


  export type SubativoAvgAggregateInputType = {
    id?: true
    id_ativo?: true
  }

  export type SubativoSumAggregateInputType = {
    id?: true
    id_ativo?: true
  }

  export type SubativoMinAggregateInputType = {
    id?: true
    nome?: true
    tipo?: true
    id_ativo?: true
  }

  export type SubativoMaxAggregateInputType = {
    id?: true
    nome?: true
    tipo?: true
    id_ativo?: true
  }

  export type SubativoCountAggregateInputType = {
    id?: true
    nome?: true
    tipo?: true
    id_ativo?: true
    _all?: true
  }

  export type SubativoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subativo to aggregate.
     */
    where?: SubativoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subativos to fetch.
     */
    orderBy?: SubativoOrderByWithRelationInput | SubativoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubativoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subativos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subativos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subativos
    **/
    _count?: true | SubativoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubativoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubativoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubativoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubativoMaxAggregateInputType
  }

  export type GetSubativoAggregateType<T extends SubativoAggregateArgs> = {
        [P in keyof T & keyof AggregateSubativo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubativo[P]>
      : GetScalarType<T[P], AggregateSubativo[P]>
  }




  export type SubativoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubativoWhereInput
    orderBy?: SubativoOrderByWithAggregationInput | SubativoOrderByWithAggregationInput[]
    by: SubativoScalarFieldEnum[] | SubativoScalarFieldEnum
    having?: SubativoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubativoCountAggregateInputType | true
    _avg?: SubativoAvgAggregateInputType
    _sum?: SubativoSumAggregateInputType
    _min?: SubativoMinAggregateInputType
    _max?: SubativoMaxAggregateInputType
  }

  export type SubativoGroupByOutputType = {
    id: number
    nome: string
    tipo: string
    id_ativo: number
    _count: SubativoCountAggregateOutputType | null
    _avg: SubativoAvgAggregateOutputType | null
    _sum: SubativoSumAggregateOutputType | null
    _min: SubativoMinAggregateOutputType | null
    _max: SubativoMaxAggregateOutputType | null
  }

  type GetSubativoGroupByPayload<T extends SubativoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubativoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubativoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubativoGroupByOutputType[P]>
            : GetScalarType<T[P], SubativoGroupByOutputType[P]>
        }
      >
    >


  export type SubativoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    tipo?: boolean
    id_ativo?: boolean
    ativo?: boolean | AtivoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subativo"]>



  export type SubativoSelectScalar = {
    id?: boolean
    nome?: boolean
    tipo?: boolean
    id_ativo?: boolean
  }

  export type SubativoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "tipo" | "id_ativo", ExtArgs["result"]["subativo"]>
  export type SubativoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ativo?: boolean | AtivoDefaultArgs<ExtArgs>
  }

  export type $SubativoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subativo"
    objects: {
      ativo: Prisma.$AtivoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      tipo: string
      id_ativo: number
    }, ExtArgs["result"]["subativo"]>
    composites: {}
  }

  type SubativoGetPayload<S extends boolean | null | undefined | SubativoDefaultArgs> = $Result.GetResult<Prisma.$SubativoPayload, S>

  type SubativoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubativoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubativoCountAggregateInputType | true
    }

  export interface SubativoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subativo'], meta: { name: 'Subativo' } }
    /**
     * Find zero or one Subativo that matches the filter.
     * @param {SubativoFindUniqueArgs} args - Arguments to find a Subativo
     * @example
     * // Get one Subativo
     * const subativo = await prisma.subativo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubativoFindUniqueArgs>(args: SelectSubset<T, SubativoFindUniqueArgs<ExtArgs>>): Prisma__SubativoClient<$Result.GetResult<Prisma.$SubativoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subativo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubativoFindUniqueOrThrowArgs} args - Arguments to find a Subativo
     * @example
     * // Get one Subativo
     * const subativo = await prisma.subativo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubativoFindUniqueOrThrowArgs>(args: SelectSubset<T, SubativoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubativoClient<$Result.GetResult<Prisma.$SubativoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subativo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubativoFindFirstArgs} args - Arguments to find a Subativo
     * @example
     * // Get one Subativo
     * const subativo = await prisma.subativo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubativoFindFirstArgs>(args?: SelectSubset<T, SubativoFindFirstArgs<ExtArgs>>): Prisma__SubativoClient<$Result.GetResult<Prisma.$SubativoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subativo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubativoFindFirstOrThrowArgs} args - Arguments to find a Subativo
     * @example
     * // Get one Subativo
     * const subativo = await prisma.subativo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubativoFindFirstOrThrowArgs>(args?: SelectSubset<T, SubativoFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubativoClient<$Result.GetResult<Prisma.$SubativoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subativos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubativoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subativos
     * const subativos = await prisma.subativo.findMany()
     * 
     * // Get first 10 Subativos
     * const subativos = await prisma.subativo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subativoWithIdOnly = await prisma.subativo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubativoFindManyArgs>(args?: SelectSubset<T, SubativoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubativoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subativo.
     * @param {SubativoCreateArgs} args - Arguments to create a Subativo.
     * @example
     * // Create one Subativo
     * const Subativo = await prisma.subativo.create({
     *   data: {
     *     // ... data to create a Subativo
     *   }
     * })
     * 
     */
    create<T extends SubativoCreateArgs>(args: SelectSubset<T, SubativoCreateArgs<ExtArgs>>): Prisma__SubativoClient<$Result.GetResult<Prisma.$SubativoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subativos.
     * @param {SubativoCreateManyArgs} args - Arguments to create many Subativos.
     * @example
     * // Create many Subativos
     * const subativo = await prisma.subativo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubativoCreateManyArgs>(args?: SelectSubset<T, SubativoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Subativo.
     * @param {SubativoDeleteArgs} args - Arguments to delete one Subativo.
     * @example
     * // Delete one Subativo
     * const Subativo = await prisma.subativo.delete({
     *   where: {
     *     // ... filter to delete one Subativo
     *   }
     * })
     * 
     */
    delete<T extends SubativoDeleteArgs>(args: SelectSubset<T, SubativoDeleteArgs<ExtArgs>>): Prisma__SubativoClient<$Result.GetResult<Prisma.$SubativoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subativo.
     * @param {SubativoUpdateArgs} args - Arguments to update one Subativo.
     * @example
     * // Update one Subativo
     * const subativo = await prisma.subativo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubativoUpdateArgs>(args: SelectSubset<T, SubativoUpdateArgs<ExtArgs>>): Prisma__SubativoClient<$Result.GetResult<Prisma.$SubativoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subativos.
     * @param {SubativoDeleteManyArgs} args - Arguments to filter Subativos to delete.
     * @example
     * // Delete a few Subativos
     * const { count } = await prisma.subativo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubativoDeleteManyArgs>(args?: SelectSubset<T, SubativoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subativos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubativoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subativos
     * const subativo = await prisma.subativo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubativoUpdateManyArgs>(args: SelectSubset<T, SubativoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Subativo.
     * @param {SubativoUpsertArgs} args - Arguments to update or create a Subativo.
     * @example
     * // Update or create a Subativo
     * const subativo = await prisma.subativo.upsert({
     *   create: {
     *     // ... data to create a Subativo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subativo we want to update
     *   }
     * })
     */
    upsert<T extends SubativoUpsertArgs>(args: SelectSubset<T, SubativoUpsertArgs<ExtArgs>>): Prisma__SubativoClient<$Result.GetResult<Prisma.$SubativoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subativos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubativoCountArgs} args - Arguments to filter Subativos to count.
     * @example
     * // Count the number of Subativos
     * const count = await prisma.subativo.count({
     *   where: {
     *     // ... the filter for the Subativos we want to count
     *   }
     * })
    **/
    count<T extends SubativoCountArgs>(
      args?: Subset<T, SubativoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubativoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subativo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubativoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubativoAggregateArgs>(args: Subset<T, SubativoAggregateArgs>): Prisma.PrismaPromise<GetSubativoAggregateType<T>>

    /**
     * Group by Subativo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubativoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubativoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubativoGroupByArgs['orderBy'] }
        : { orderBy?: SubativoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubativoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubativoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subativo model
   */
  readonly fields: SubativoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subativo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubativoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ativo<T extends AtivoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AtivoDefaultArgs<ExtArgs>>): Prisma__AtivoClient<$Result.GetResult<Prisma.$AtivoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Subativo model
   */
  interface SubativoFieldRefs {
    readonly id: FieldRef<"Subativo", 'Int'>
    readonly nome: FieldRef<"Subativo", 'String'>
    readonly tipo: FieldRef<"Subativo", 'String'>
    readonly id_ativo: FieldRef<"Subativo", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Subativo findUnique
   */
  export type SubativoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subativo
     */
    select?: SubativoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subativo
     */
    omit?: SubativoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubativoInclude<ExtArgs> | null
    /**
     * Filter, which Subativo to fetch.
     */
    where: SubativoWhereUniqueInput
  }

  /**
   * Subativo findUniqueOrThrow
   */
  export type SubativoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subativo
     */
    select?: SubativoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subativo
     */
    omit?: SubativoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubativoInclude<ExtArgs> | null
    /**
     * Filter, which Subativo to fetch.
     */
    where: SubativoWhereUniqueInput
  }

  /**
   * Subativo findFirst
   */
  export type SubativoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subativo
     */
    select?: SubativoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subativo
     */
    omit?: SubativoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubativoInclude<ExtArgs> | null
    /**
     * Filter, which Subativo to fetch.
     */
    where?: SubativoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subativos to fetch.
     */
    orderBy?: SubativoOrderByWithRelationInput | SubativoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subativos.
     */
    cursor?: SubativoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subativos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subativos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subativos.
     */
    distinct?: SubativoScalarFieldEnum | SubativoScalarFieldEnum[]
  }

  /**
   * Subativo findFirstOrThrow
   */
  export type SubativoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subativo
     */
    select?: SubativoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subativo
     */
    omit?: SubativoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubativoInclude<ExtArgs> | null
    /**
     * Filter, which Subativo to fetch.
     */
    where?: SubativoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subativos to fetch.
     */
    orderBy?: SubativoOrderByWithRelationInput | SubativoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subativos.
     */
    cursor?: SubativoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subativos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subativos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subativos.
     */
    distinct?: SubativoScalarFieldEnum | SubativoScalarFieldEnum[]
  }

  /**
   * Subativo findMany
   */
  export type SubativoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subativo
     */
    select?: SubativoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subativo
     */
    omit?: SubativoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubativoInclude<ExtArgs> | null
    /**
     * Filter, which Subativos to fetch.
     */
    where?: SubativoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subativos to fetch.
     */
    orderBy?: SubativoOrderByWithRelationInput | SubativoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subativos.
     */
    cursor?: SubativoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subativos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subativos.
     */
    skip?: number
    distinct?: SubativoScalarFieldEnum | SubativoScalarFieldEnum[]
  }

  /**
   * Subativo create
   */
  export type SubativoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subativo
     */
    select?: SubativoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subativo
     */
    omit?: SubativoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubativoInclude<ExtArgs> | null
    /**
     * The data needed to create a Subativo.
     */
    data: XOR<SubativoCreateInput, SubativoUncheckedCreateInput>
  }

  /**
   * Subativo createMany
   */
  export type SubativoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subativos.
     */
    data: SubativoCreateManyInput | SubativoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subativo update
   */
  export type SubativoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subativo
     */
    select?: SubativoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subativo
     */
    omit?: SubativoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubativoInclude<ExtArgs> | null
    /**
     * The data needed to update a Subativo.
     */
    data: XOR<SubativoUpdateInput, SubativoUncheckedUpdateInput>
    /**
     * Choose, which Subativo to update.
     */
    where: SubativoWhereUniqueInput
  }

  /**
   * Subativo updateMany
   */
  export type SubativoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subativos.
     */
    data: XOR<SubativoUpdateManyMutationInput, SubativoUncheckedUpdateManyInput>
    /**
     * Filter which Subativos to update
     */
    where?: SubativoWhereInput
    /**
     * Limit how many Subativos to update.
     */
    limit?: number
  }

  /**
   * Subativo upsert
   */
  export type SubativoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subativo
     */
    select?: SubativoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subativo
     */
    omit?: SubativoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubativoInclude<ExtArgs> | null
    /**
     * The filter to search for the Subativo to update in case it exists.
     */
    where: SubativoWhereUniqueInput
    /**
     * In case the Subativo found by the `where` argument doesn't exist, create a new Subativo with this data.
     */
    create: XOR<SubativoCreateInput, SubativoUncheckedCreateInput>
    /**
     * In case the Subativo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubativoUpdateInput, SubativoUncheckedUpdateInput>
  }

  /**
   * Subativo delete
   */
  export type SubativoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subativo
     */
    select?: SubativoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subativo
     */
    omit?: SubativoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubativoInclude<ExtArgs> | null
    /**
     * Filter which Subativo to delete.
     */
    where: SubativoWhereUniqueInput
  }

  /**
   * Subativo deleteMany
   */
  export type SubativoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subativos to delete
     */
    where?: SubativoWhereInput
    /**
     * Limit how many Subativos to delete.
     */
    limit?: number
  }

  /**
   * Subativo without action
   */
  export type SubativoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subativo
     */
    select?: SubativoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subativo
     */
    omit?: SubativoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubativoInclude<ExtArgs> | null
  }


  /**
   * Model Manutencao
   */

  export type AggregateManutencao = {
    _count: ManutencaoCountAggregateOutputType | null
    _avg: ManutencaoAvgAggregateOutputType | null
    _sum: ManutencaoSumAggregateOutputType | null
    _min: ManutencaoMinAggregateOutputType | null
    _max: ManutencaoMaxAggregateOutputType | null
  }

  export type ManutencaoAvgAggregateOutputType = {
    id: number | null
    id_ativo: number | null
  }

  export type ManutencaoSumAggregateOutputType = {
    id: number | null
    id_ativo: number | null
  }

  export type ManutencaoMinAggregateOutputType = {
    id: number | null
    tipo: $Enums.TipoManutencao | null
    data_inicio: Date | null
    data_fim: Date | null
    descricao: string | null
    id_ativo: number | null
  }

  export type ManutencaoMaxAggregateOutputType = {
    id: number | null
    tipo: $Enums.TipoManutencao | null
    data_inicio: Date | null
    data_fim: Date | null
    descricao: string | null
    id_ativo: number | null
  }

  export type ManutencaoCountAggregateOutputType = {
    id: number
    tipo: number
    data_inicio: number
    data_fim: number
    descricao: number
    id_ativo: number
    _all: number
  }


  export type ManutencaoAvgAggregateInputType = {
    id?: true
    id_ativo?: true
  }

  export type ManutencaoSumAggregateInputType = {
    id?: true
    id_ativo?: true
  }

  export type ManutencaoMinAggregateInputType = {
    id?: true
    tipo?: true
    data_inicio?: true
    data_fim?: true
    descricao?: true
    id_ativo?: true
  }

  export type ManutencaoMaxAggregateInputType = {
    id?: true
    tipo?: true
    data_inicio?: true
    data_fim?: true
    descricao?: true
    id_ativo?: true
  }

  export type ManutencaoCountAggregateInputType = {
    id?: true
    tipo?: true
    data_inicio?: true
    data_fim?: true
    descricao?: true
    id_ativo?: true
    _all?: true
  }

  export type ManutencaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Manutencao to aggregate.
     */
    where?: ManutencaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Manutencaos to fetch.
     */
    orderBy?: ManutencaoOrderByWithRelationInput | ManutencaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ManutencaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Manutencaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Manutencaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Manutencaos
    **/
    _count?: true | ManutencaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ManutencaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ManutencaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ManutencaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ManutencaoMaxAggregateInputType
  }

  export type GetManutencaoAggregateType<T extends ManutencaoAggregateArgs> = {
        [P in keyof T & keyof AggregateManutencao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateManutencao[P]>
      : GetScalarType<T[P], AggregateManutencao[P]>
  }




  export type ManutencaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ManutencaoWhereInput
    orderBy?: ManutencaoOrderByWithAggregationInput | ManutencaoOrderByWithAggregationInput[]
    by: ManutencaoScalarFieldEnum[] | ManutencaoScalarFieldEnum
    having?: ManutencaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ManutencaoCountAggregateInputType | true
    _avg?: ManutencaoAvgAggregateInputType
    _sum?: ManutencaoSumAggregateInputType
    _min?: ManutencaoMinAggregateInputType
    _max?: ManutencaoMaxAggregateInputType
  }

  export type ManutencaoGroupByOutputType = {
    id: number
    tipo: $Enums.TipoManutencao
    data_inicio: Date
    data_fim: Date
    descricao: string
    id_ativo: number
    _count: ManutencaoCountAggregateOutputType | null
    _avg: ManutencaoAvgAggregateOutputType | null
    _sum: ManutencaoSumAggregateOutputType | null
    _min: ManutencaoMinAggregateOutputType | null
    _max: ManutencaoMaxAggregateOutputType | null
  }

  type GetManutencaoGroupByPayload<T extends ManutencaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ManutencaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ManutencaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ManutencaoGroupByOutputType[P]>
            : GetScalarType<T[P], ManutencaoGroupByOutputType[P]>
        }
      >
    >


  export type ManutencaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    data_inicio?: boolean
    data_fim?: boolean
    descricao?: boolean
    id_ativo?: boolean
    ativo?: boolean | AtivoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["manutencao"]>



  export type ManutencaoSelectScalar = {
    id?: boolean
    tipo?: boolean
    data_inicio?: boolean
    data_fim?: boolean
    descricao?: boolean
    id_ativo?: boolean
  }

  export type ManutencaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tipo" | "data_inicio" | "data_fim" | "descricao" | "id_ativo", ExtArgs["result"]["manutencao"]>
  export type ManutencaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ativo?: boolean | AtivoDefaultArgs<ExtArgs>
  }

  export type $ManutencaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Manutencao"
    objects: {
      ativo: Prisma.$AtivoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tipo: $Enums.TipoManutencao
      data_inicio: Date
      data_fim: Date
      descricao: string
      id_ativo: number
    }, ExtArgs["result"]["manutencao"]>
    composites: {}
  }

  type ManutencaoGetPayload<S extends boolean | null | undefined | ManutencaoDefaultArgs> = $Result.GetResult<Prisma.$ManutencaoPayload, S>

  type ManutencaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ManutencaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ManutencaoCountAggregateInputType | true
    }

  export interface ManutencaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Manutencao'], meta: { name: 'Manutencao' } }
    /**
     * Find zero or one Manutencao that matches the filter.
     * @param {ManutencaoFindUniqueArgs} args - Arguments to find a Manutencao
     * @example
     * // Get one Manutencao
     * const manutencao = await prisma.manutencao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ManutencaoFindUniqueArgs>(args: SelectSubset<T, ManutencaoFindUniqueArgs<ExtArgs>>): Prisma__ManutencaoClient<$Result.GetResult<Prisma.$ManutencaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Manutencao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ManutencaoFindUniqueOrThrowArgs} args - Arguments to find a Manutencao
     * @example
     * // Get one Manutencao
     * const manutencao = await prisma.manutencao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ManutencaoFindUniqueOrThrowArgs>(args: SelectSubset<T, ManutencaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ManutencaoClient<$Result.GetResult<Prisma.$ManutencaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Manutencao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManutencaoFindFirstArgs} args - Arguments to find a Manutencao
     * @example
     * // Get one Manutencao
     * const manutencao = await prisma.manutencao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ManutencaoFindFirstArgs>(args?: SelectSubset<T, ManutencaoFindFirstArgs<ExtArgs>>): Prisma__ManutencaoClient<$Result.GetResult<Prisma.$ManutencaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Manutencao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManutencaoFindFirstOrThrowArgs} args - Arguments to find a Manutencao
     * @example
     * // Get one Manutencao
     * const manutencao = await prisma.manutencao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ManutencaoFindFirstOrThrowArgs>(args?: SelectSubset<T, ManutencaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ManutencaoClient<$Result.GetResult<Prisma.$ManutencaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Manutencaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManutencaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Manutencaos
     * const manutencaos = await prisma.manutencao.findMany()
     * 
     * // Get first 10 Manutencaos
     * const manutencaos = await prisma.manutencao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const manutencaoWithIdOnly = await prisma.manutencao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ManutencaoFindManyArgs>(args?: SelectSubset<T, ManutencaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManutencaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Manutencao.
     * @param {ManutencaoCreateArgs} args - Arguments to create a Manutencao.
     * @example
     * // Create one Manutencao
     * const Manutencao = await prisma.manutencao.create({
     *   data: {
     *     // ... data to create a Manutencao
     *   }
     * })
     * 
     */
    create<T extends ManutencaoCreateArgs>(args: SelectSubset<T, ManutencaoCreateArgs<ExtArgs>>): Prisma__ManutencaoClient<$Result.GetResult<Prisma.$ManutencaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Manutencaos.
     * @param {ManutencaoCreateManyArgs} args - Arguments to create many Manutencaos.
     * @example
     * // Create many Manutencaos
     * const manutencao = await prisma.manutencao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ManutencaoCreateManyArgs>(args?: SelectSubset<T, ManutencaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Manutencao.
     * @param {ManutencaoDeleteArgs} args - Arguments to delete one Manutencao.
     * @example
     * // Delete one Manutencao
     * const Manutencao = await prisma.manutencao.delete({
     *   where: {
     *     // ... filter to delete one Manutencao
     *   }
     * })
     * 
     */
    delete<T extends ManutencaoDeleteArgs>(args: SelectSubset<T, ManutencaoDeleteArgs<ExtArgs>>): Prisma__ManutencaoClient<$Result.GetResult<Prisma.$ManutencaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Manutencao.
     * @param {ManutencaoUpdateArgs} args - Arguments to update one Manutencao.
     * @example
     * // Update one Manutencao
     * const manutencao = await prisma.manutencao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ManutencaoUpdateArgs>(args: SelectSubset<T, ManutencaoUpdateArgs<ExtArgs>>): Prisma__ManutencaoClient<$Result.GetResult<Prisma.$ManutencaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Manutencaos.
     * @param {ManutencaoDeleteManyArgs} args - Arguments to filter Manutencaos to delete.
     * @example
     * // Delete a few Manutencaos
     * const { count } = await prisma.manutencao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ManutencaoDeleteManyArgs>(args?: SelectSubset<T, ManutencaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Manutencaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManutencaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Manutencaos
     * const manutencao = await prisma.manutencao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ManutencaoUpdateManyArgs>(args: SelectSubset<T, ManutencaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Manutencao.
     * @param {ManutencaoUpsertArgs} args - Arguments to update or create a Manutencao.
     * @example
     * // Update or create a Manutencao
     * const manutencao = await prisma.manutencao.upsert({
     *   create: {
     *     // ... data to create a Manutencao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Manutencao we want to update
     *   }
     * })
     */
    upsert<T extends ManutencaoUpsertArgs>(args: SelectSubset<T, ManutencaoUpsertArgs<ExtArgs>>): Prisma__ManutencaoClient<$Result.GetResult<Prisma.$ManutencaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Manutencaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManutencaoCountArgs} args - Arguments to filter Manutencaos to count.
     * @example
     * // Count the number of Manutencaos
     * const count = await prisma.manutencao.count({
     *   where: {
     *     // ... the filter for the Manutencaos we want to count
     *   }
     * })
    **/
    count<T extends ManutencaoCountArgs>(
      args?: Subset<T, ManutencaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ManutencaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Manutencao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManutencaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ManutencaoAggregateArgs>(args: Subset<T, ManutencaoAggregateArgs>): Prisma.PrismaPromise<GetManutencaoAggregateType<T>>

    /**
     * Group by Manutencao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManutencaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ManutencaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ManutencaoGroupByArgs['orderBy'] }
        : { orderBy?: ManutencaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ManutencaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetManutencaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Manutencao model
   */
  readonly fields: ManutencaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Manutencao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ManutencaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ativo<T extends AtivoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AtivoDefaultArgs<ExtArgs>>): Prisma__AtivoClient<$Result.GetResult<Prisma.$AtivoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Manutencao model
   */
  interface ManutencaoFieldRefs {
    readonly id: FieldRef<"Manutencao", 'Int'>
    readonly tipo: FieldRef<"Manutencao", 'TipoManutencao'>
    readonly data_inicio: FieldRef<"Manutencao", 'DateTime'>
    readonly data_fim: FieldRef<"Manutencao", 'DateTime'>
    readonly descricao: FieldRef<"Manutencao", 'String'>
    readonly id_ativo: FieldRef<"Manutencao", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Manutencao findUnique
   */
  export type ManutencaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manutencao
     */
    select?: ManutencaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manutencao
     */
    omit?: ManutencaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManutencaoInclude<ExtArgs> | null
    /**
     * Filter, which Manutencao to fetch.
     */
    where: ManutencaoWhereUniqueInput
  }

  /**
   * Manutencao findUniqueOrThrow
   */
  export type ManutencaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manutencao
     */
    select?: ManutencaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manutencao
     */
    omit?: ManutencaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManutencaoInclude<ExtArgs> | null
    /**
     * Filter, which Manutencao to fetch.
     */
    where: ManutencaoWhereUniqueInput
  }

  /**
   * Manutencao findFirst
   */
  export type ManutencaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manutencao
     */
    select?: ManutencaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manutencao
     */
    omit?: ManutencaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManutencaoInclude<ExtArgs> | null
    /**
     * Filter, which Manutencao to fetch.
     */
    where?: ManutencaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Manutencaos to fetch.
     */
    orderBy?: ManutencaoOrderByWithRelationInput | ManutencaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Manutencaos.
     */
    cursor?: ManutencaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Manutencaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Manutencaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Manutencaos.
     */
    distinct?: ManutencaoScalarFieldEnum | ManutencaoScalarFieldEnum[]
  }

  /**
   * Manutencao findFirstOrThrow
   */
  export type ManutencaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manutencao
     */
    select?: ManutencaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manutencao
     */
    omit?: ManutencaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManutencaoInclude<ExtArgs> | null
    /**
     * Filter, which Manutencao to fetch.
     */
    where?: ManutencaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Manutencaos to fetch.
     */
    orderBy?: ManutencaoOrderByWithRelationInput | ManutencaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Manutencaos.
     */
    cursor?: ManutencaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Manutencaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Manutencaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Manutencaos.
     */
    distinct?: ManutencaoScalarFieldEnum | ManutencaoScalarFieldEnum[]
  }

  /**
   * Manutencao findMany
   */
  export type ManutencaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manutencao
     */
    select?: ManutencaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manutencao
     */
    omit?: ManutencaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManutencaoInclude<ExtArgs> | null
    /**
     * Filter, which Manutencaos to fetch.
     */
    where?: ManutencaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Manutencaos to fetch.
     */
    orderBy?: ManutencaoOrderByWithRelationInput | ManutencaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Manutencaos.
     */
    cursor?: ManutencaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Manutencaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Manutencaos.
     */
    skip?: number
    distinct?: ManutencaoScalarFieldEnum | ManutencaoScalarFieldEnum[]
  }

  /**
   * Manutencao create
   */
  export type ManutencaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manutencao
     */
    select?: ManutencaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manutencao
     */
    omit?: ManutencaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManutencaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Manutencao.
     */
    data: XOR<ManutencaoCreateInput, ManutencaoUncheckedCreateInput>
  }

  /**
   * Manutencao createMany
   */
  export type ManutencaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Manutencaos.
     */
    data: ManutencaoCreateManyInput | ManutencaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Manutencao update
   */
  export type ManutencaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manutencao
     */
    select?: ManutencaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manutencao
     */
    omit?: ManutencaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManutencaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Manutencao.
     */
    data: XOR<ManutencaoUpdateInput, ManutencaoUncheckedUpdateInput>
    /**
     * Choose, which Manutencao to update.
     */
    where: ManutencaoWhereUniqueInput
  }

  /**
   * Manutencao updateMany
   */
  export type ManutencaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Manutencaos.
     */
    data: XOR<ManutencaoUpdateManyMutationInput, ManutencaoUncheckedUpdateManyInput>
    /**
     * Filter which Manutencaos to update
     */
    where?: ManutencaoWhereInput
    /**
     * Limit how many Manutencaos to update.
     */
    limit?: number
  }

  /**
   * Manutencao upsert
   */
  export type ManutencaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manutencao
     */
    select?: ManutencaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manutencao
     */
    omit?: ManutencaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManutencaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Manutencao to update in case it exists.
     */
    where: ManutencaoWhereUniqueInput
    /**
     * In case the Manutencao found by the `where` argument doesn't exist, create a new Manutencao with this data.
     */
    create: XOR<ManutencaoCreateInput, ManutencaoUncheckedCreateInput>
    /**
     * In case the Manutencao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ManutencaoUpdateInput, ManutencaoUncheckedUpdateInput>
  }

  /**
   * Manutencao delete
   */
  export type ManutencaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manutencao
     */
    select?: ManutencaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manutencao
     */
    omit?: ManutencaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManutencaoInclude<ExtArgs> | null
    /**
     * Filter which Manutencao to delete.
     */
    where: ManutencaoWhereUniqueInput
  }

  /**
   * Manutencao deleteMany
   */
  export type ManutencaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Manutencaos to delete
     */
    where?: ManutencaoWhereInput
    /**
     * Limit how many Manutencaos to delete.
     */
    limit?: number
  }

  /**
   * Manutencao without action
   */
  export type ManutencaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manutencao
     */
    select?: ManutencaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manutencao
     */
    omit?: ManutencaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManutencaoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PlantaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    localizacao: 'localizacao',
    codigo: 'codigo'
  };

  export type PlantaScalarFieldEnum = (typeof PlantaScalarFieldEnum)[keyof typeof PlantaScalarFieldEnum]


  export const AreaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    id_planta: 'id_planta',
    codigo: 'codigo'
  };

  export type AreaScalarFieldEnum = (typeof AreaScalarFieldEnum)[keyof typeof AreaScalarFieldEnum]


  export const SistemaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    id_area: 'id_area',
    codigo: 'codigo'
  };

  export type SistemaScalarFieldEnum = (typeof SistemaScalarFieldEnum)[keyof typeof SistemaScalarFieldEnum]


  export const AtivoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    codigo_patrimonio: 'codigo_patrimonio',
    fabricante: 'fabricante',
    modelo: 'modelo',
    data_aquisicao: 'data_aquisicao',
    localizacao_interna: 'localizacao_interna',
    tipo_ativo: 'tipo_ativo',
    situacao: 'situacao',
    criticidade: 'criticidade',
    id_sistema: 'id_sistema',
    codigo: 'codigo'
  };

  export type AtivoScalarFieldEnum = (typeof AtivoScalarFieldEnum)[keyof typeof AtivoScalarFieldEnum]


  export const FalhaScalarFieldEnum: {
    id: 'id',
    descricao: 'descricao',
    data_ocorrencia: 'data_ocorrencia',
    criticidade: 'criticidade',
    id_ativo: 'id_ativo'
  };

  export type FalhaScalarFieldEnum = (typeof FalhaScalarFieldEnum)[keyof typeof FalhaScalarFieldEnum]


  export const SubativoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    tipo: 'tipo',
    id_ativo: 'id_ativo'
  };

  export type SubativoScalarFieldEnum = (typeof SubativoScalarFieldEnum)[keyof typeof SubativoScalarFieldEnum]


  export const ManutencaoScalarFieldEnum: {
    id: 'id',
    tipo: 'tipo',
    data_inicio: 'data_inicio',
    data_fim: 'data_fim',
    descricao: 'descricao',
    id_ativo: 'id_ativo'
  };

  export type ManutencaoScalarFieldEnum = (typeof ManutencaoScalarFieldEnum)[keyof typeof ManutencaoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const PlantaOrderByRelevanceFieldEnum: {
    nome: 'nome',
    localizacao: 'localizacao',
    codigo: 'codigo'
  };

  export type PlantaOrderByRelevanceFieldEnum = (typeof PlantaOrderByRelevanceFieldEnum)[keyof typeof PlantaOrderByRelevanceFieldEnum]


  export const AreaOrderByRelevanceFieldEnum: {
    nome: 'nome',
    codigo: 'codigo'
  };

  export type AreaOrderByRelevanceFieldEnum = (typeof AreaOrderByRelevanceFieldEnum)[keyof typeof AreaOrderByRelevanceFieldEnum]


  export const SistemaOrderByRelevanceFieldEnum: {
    nome: 'nome',
    codigo: 'codigo'
  };

  export type SistemaOrderByRelevanceFieldEnum = (typeof SistemaOrderByRelevanceFieldEnum)[keyof typeof SistemaOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const AtivoOrderByRelevanceFieldEnum: {
    nome: 'nome',
    codigo_patrimonio: 'codigo_patrimonio',
    fabricante: 'fabricante',
    modelo: 'modelo',
    localizacao_interna: 'localizacao_interna',
    codigo: 'codigo'
  };

  export type AtivoOrderByRelevanceFieldEnum = (typeof AtivoOrderByRelevanceFieldEnum)[keyof typeof AtivoOrderByRelevanceFieldEnum]


  export const FalhaOrderByRelevanceFieldEnum: {
    descricao: 'descricao'
  };

  export type FalhaOrderByRelevanceFieldEnum = (typeof FalhaOrderByRelevanceFieldEnum)[keyof typeof FalhaOrderByRelevanceFieldEnum]


  export const SubativoOrderByRelevanceFieldEnum: {
    nome: 'nome',
    tipo: 'tipo'
  };

  export type SubativoOrderByRelevanceFieldEnum = (typeof SubativoOrderByRelevanceFieldEnum)[keyof typeof SubativoOrderByRelevanceFieldEnum]


  export const ManutencaoOrderByRelevanceFieldEnum: {
    descricao: 'descricao'
  };

  export type ManutencaoOrderByRelevanceFieldEnum = (typeof ManutencaoOrderByRelevanceFieldEnum)[keyof typeof ManutencaoOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'TipoAtivo'
   */
  export type EnumTipoAtivoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoAtivo'>
    


  /**
   * Reference to a field of type 'SituacaoAtivo'
   */
  export type EnumSituacaoAtivoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SituacaoAtivo'>
    


  /**
   * Reference to a field of type 'Criticidade'
   */
  export type EnumCriticidadeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Criticidade'>
    


  /**
   * Reference to a field of type 'TipoManutencao'
   */
  export type EnumTipoManutencaoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoManutencao'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type PlantaWhereInput = {
    AND?: PlantaWhereInput | PlantaWhereInput[]
    OR?: PlantaWhereInput[]
    NOT?: PlantaWhereInput | PlantaWhereInput[]
    id?: IntFilter<"Planta"> | number
    nome?: StringFilter<"Planta"> | string
    localizacao?: StringFilter<"Planta"> | string
    codigo?: StringFilter<"Planta"> | string
    area?: AreaListRelationFilter
  }

  export type PlantaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    localizacao?: SortOrder
    codigo?: SortOrder
    area?: AreaOrderByRelationAggregateInput
    _relevance?: PlantaOrderByRelevanceInput
  }

  export type PlantaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    codigo?: string
    AND?: PlantaWhereInput | PlantaWhereInput[]
    OR?: PlantaWhereInput[]
    NOT?: PlantaWhereInput | PlantaWhereInput[]
    nome?: StringFilter<"Planta"> | string
    localizacao?: StringFilter<"Planta"> | string
    area?: AreaListRelationFilter
  }, "id" | "codigo">

  export type PlantaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    localizacao?: SortOrder
    codigo?: SortOrder
    _count?: PlantaCountOrderByAggregateInput
    _avg?: PlantaAvgOrderByAggregateInput
    _max?: PlantaMaxOrderByAggregateInput
    _min?: PlantaMinOrderByAggregateInput
    _sum?: PlantaSumOrderByAggregateInput
  }

  export type PlantaScalarWhereWithAggregatesInput = {
    AND?: PlantaScalarWhereWithAggregatesInput | PlantaScalarWhereWithAggregatesInput[]
    OR?: PlantaScalarWhereWithAggregatesInput[]
    NOT?: PlantaScalarWhereWithAggregatesInput | PlantaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Planta"> | number
    nome?: StringWithAggregatesFilter<"Planta"> | string
    localizacao?: StringWithAggregatesFilter<"Planta"> | string
    codigo?: StringWithAggregatesFilter<"Planta"> | string
  }

  export type AreaWhereInput = {
    AND?: AreaWhereInput | AreaWhereInput[]
    OR?: AreaWhereInput[]
    NOT?: AreaWhereInput | AreaWhereInput[]
    id?: IntFilter<"Area"> | number
    nome?: StringFilter<"Area"> | string
    id_planta?: IntFilter<"Area"> | number
    codigo?: StringFilter<"Area"> | string
    planta?: XOR<PlantaScalarRelationFilter, PlantaWhereInput>
    sistema?: SistemaListRelationFilter
  }

  export type AreaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    id_planta?: SortOrder
    codigo?: SortOrder
    planta?: PlantaOrderByWithRelationInput
    sistema?: SistemaOrderByRelationAggregateInput
    _relevance?: AreaOrderByRelevanceInput
  }

  export type AreaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    codigo?: string
    AND?: AreaWhereInput | AreaWhereInput[]
    OR?: AreaWhereInput[]
    NOT?: AreaWhereInput | AreaWhereInput[]
    nome?: StringFilter<"Area"> | string
    id_planta?: IntFilter<"Area"> | number
    planta?: XOR<PlantaScalarRelationFilter, PlantaWhereInput>
    sistema?: SistemaListRelationFilter
  }, "id" | "codigo">

  export type AreaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    id_planta?: SortOrder
    codigo?: SortOrder
    _count?: AreaCountOrderByAggregateInput
    _avg?: AreaAvgOrderByAggregateInput
    _max?: AreaMaxOrderByAggregateInput
    _min?: AreaMinOrderByAggregateInput
    _sum?: AreaSumOrderByAggregateInput
  }

  export type AreaScalarWhereWithAggregatesInput = {
    AND?: AreaScalarWhereWithAggregatesInput | AreaScalarWhereWithAggregatesInput[]
    OR?: AreaScalarWhereWithAggregatesInput[]
    NOT?: AreaScalarWhereWithAggregatesInput | AreaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Area"> | number
    nome?: StringWithAggregatesFilter<"Area"> | string
    id_planta?: IntWithAggregatesFilter<"Area"> | number
    codigo?: StringWithAggregatesFilter<"Area"> | string
  }

  export type SistemaWhereInput = {
    AND?: SistemaWhereInput | SistemaWhereInput[]
    OR?: SistemaWhereInput[]
    NOT?: SistemaWhereInput | SistemaWhereInput[]
    id?: IntFilter<"Sistema"> | number
    nome?: StringFilter<"Sistema"> | string
    id_area?: IntFilter<"Sistema"> | number
    codigo?: StringFilter<"Sistema"> | string
    area?: XOR<AreaScalarRelationFilter, AreaWhereInput>
    ativo?: AtivoListRelationFilter
  }

  export type SistemaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    id_area?: SortOrder
    codigo?: SortOrder
    area?: AreaOrderByWithRelationInput
    ativo?: AtivoOrderByRelationAggregateInput
    _relevance?: SistemaOrderByRelevanceInput
  }

  export type SistemaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    codigo?: string
    AND?: SistemaWhereInput | SistemaWhereInput[]
    OR?: SistemaWhereInput[]
    NOT?: SistemaWhereInput | SistemaWhereInput[]
    nome?: StringFilter<"Sistema"> | string
    id_area?: IntFilter<"Sistema"> | number
    area?: XOR<AreaScalarRelationFilter, AreaWhereInput>
    ativo?: AtivoListRelationFilter
  }, "id" | "codigo">

  export type SistemaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    id_area?: SortOrder
    codigo?: SortOrder
    _count?: SistemaCountOrderByAggregateInput
    _avg?: SistemaAvgOrderByAggregateInput
    _max?: SistemaMaxOrderByAggregateInput
    _min?: SistemaMinOrderByAggregateInput
    _sum?: SistemaSumOrderByAggregateInput
  }

  export type SistemaScalarWhereWithAggregatesInput = {
    AND?: SistemaScalarWhereWithAggregatesInput | SistemaScalarWhereWithAggregatesInput[]
    OR?: SistemaScalarWhereWithAggregatesInput[]
    NOT?: SistemaScalarWhereWithAggregatesInput | SistemaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Sistema"> | number
    nome?: StringWithAggregatesFilter<"Sistema"> | string
    id_area?: IntWithAggregatesFilter<"Sistema"> | number
    codigo?: StringWithAggregatesFilter<"Sistema"> | string
  }

  export type AtivoWhereInput = {
    AND?: AtivoWhereInput | AtivoWhereInput[]
    OR?: AtivoWhereInput[]
    NOT?: AtivoWhereInput | AtivoWhereInput[]
    id?: IntFilter<"Ativo"> | number
    nome?: StringFilter<"Ativo"> | string
    codigo_patrimonio?: StringFilter<"Ativo"> | string
    fabricante?: StringFilter<"Ativo"> | string
    modelo?: StringFilter<"Ativo"> | string
    data_aquisicao?: DateTimeNullableFilter<"Ativo"> | Date | string | null
    localizacao_interna?: StringNullableFilter<"Ativo"> | string | null
    tipo_ativo?: EnumTipoAtivoFilter<"Ativo"> | $Enums.TipoAtivo
    situacao?: EnumSituacaoAtivoFilter<"Ativo"> | $Enums.SituacaoAtivo
    criticidade?: EnumCriticidadeFilter<"Ativo"> | $Enums.Criticidade
    id_sistema?: IntFilter<"Ativo"> | number
    codigo?: StringFilter<"Ativo"> | string
    sistema?: XOR<SistemaScalarRelationFilter, SistemaWhereInput>
    subativos?: SubativoListRelationFilter
    manutencoes?: ManutencaoListRelationFilter
    falhas?: FalhaListRelationFilter
  }

  export type AtivoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    codigo_patrimonio?: SortOrder
    fabricante?: SortOrder
    modelo?: SortOrder
    data_aquisicao?: SortOrderInput | SortOrder
    localizacao_interna?: SortOrderInput | SortOrder
    tipo_ativo?: SortOrder
    situacao?: SortOrder
    criticidade?: SortOrder
    id_sistema?: SortOrder
    codigo?: SortOrder
    sistema?: SistemaOrderByWithRelationInput
    subativos?: SubativoOrderByRelationAggregateInput
    manutencoes?: ManutencaoOrderByRelationAggregateInput
    falhas?: FalhaOrderByRelationAggregateInput
    _relevance?: AtivoOrderByRelevanceInput
  }

  export type AtivoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    codigo?: string
    AND?: AtivoWhereInput | AtivoWhereInput[]
    OR?: AtivoWhereInput[]
    NOT?: AtivoWhereInput | AtivoWhereInput[]
    nome?: StringFilter<"Ativo"> | string
    codigo_patrimonio?: StringFilter<"Ativo"> | string
    fabricante?: StringFilter<"Ativo"> | string
    modelo?: StringFilter<"Ativo"> | string
    data_aquisicao?: DateTimeNullableFilter<"Ativo"> | Date | string | null
    localizacao_interna?: StringNullableFilter<"Ativo"> | string | null
    tipo_ativo?: EnumTipoAtivoFilter<"Ativo"> | $Enums.TipoAtivo
    situacao?: EnumSituacaoAtivoFilter<"Ativo"> | $Enums.SituacaoAtivo
    criticidade?: EnumCriticidadeFilter<"Ativo"> | $Enums.Criticidade
    id_sistema?: IntFilter<"Ativo"> | number
    sistema?: XOR<SistemaScalarRelationFilter, SistemaWhereInput>
    subativos?: SubativoListRelationFilter
    manutencoes?: ManutencaoListRelationFilter
    falhas?: FalhaListRelationFilter
  }, "id" | "codigo">

  export type AtivoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    codigo_patrimonio?: SortOrder
    fabricante?: SortOrder
    modelo?: SortOrder
    data_aquisicao?: SortOrderInput | SortOrder
    localizacao_interna?: SortOrderInput | SortOrder
    tipo_ativo?: SortOrder
    situacao?: SortOrder
    criticidade?: SortOrder
    id_sistema?: SortOrder
    codigo?: SortOrder
    _count?: AtivoCountOrderByAggregateInput
    _avg?: AtivoAvgOrderByAggregateInput
    _max?: AtivoMaxOrderByAggregateInput
    _min?: AtivoMinOrderByAggregateInput
    _sum?: AtivoSumOrderByAggregateInput
  }

  export type AtivoScalarWhereWithAggregatesInput = {
    AND?: AtivoScalarWhereWithAggregatesInput | AtivoScalarWhereWithAggregatesInput[]
    OR?: AtivoScalarWhereWithAggregatesInput[]
    NOT?: AtivoScalarWhereWithAggregatesInput | AtivoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ativo"> | number
    nome?: StringWithAggregatesFilter<"Ativo"> | string
    codigo_patrimonio?: StringWithAggregatesFilter<"Ativo"> | string
    fabricante?: StringWithAggregatesFilter<"Ativo"> | string
    modelo?: StringWithAggregatesFilter<"Ativo"> | string
    data_aquisicao?: DateTimeNullableWithAggregatesFilter<"Ativo"> | Date | string | null
    localizacao_interna?: StringNullableWithAggregatesFilter<"Ativo"> | string | null
    tipo_ativo?: EnumTipoAtivoWithAggregatesFilter<"Ativo"> | $Enums.TipoAtivo
    situacao?: EnumSituacaoAtivoWithAggregatesFilter<"Ativo"> | $Enums.SituacaoAtivo
    criticidade?: EnumCriticidadeWithAggregatesFilter<"Ativo"> | $Enums.Criticidade
    id_sistema?: IntWithAggregatesFilter<"Ativo"> | number
    codigo?: StringWithAggregatesFilter<"Ativo"> | string
  }

  export type FalhaWhereInput = {
    AND?: FalhaWhereInput | FalhaWhereInput[]
    OR?: FalhaWhereInput[]
    NOT?: FalhaWhereInput | FalhaWhereInput[]
    id?: IntFilter<"Falha"> | number
    descricao?: StringFilter<"Falha"> | string
    data_ocorrencia?: DateTimeFilter<"Falha"> | Date | string
    criticidade?: EnumCriticidadeFilter<"Falha"> | $Enums.Criticidade
    id_ativo?: IntFilter<"Falha"> | number
    ativo?: XOR<AtivoScalarRelationFilter, AtivoWhereInput>
  }

  export type FalhaOrderByWithRelationInput = {
    id?: SortOrder
    descricao?: SortOrder
    data_ocorrencia?: SortOrder
    criticidade?: SortOrder
    id_ativo?: SortOrder
    ativo?: AtivoOrderByWithRelationInput
    _relevance?: FalhaOrderByRelevanceInput
  }

  export type FalhaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FalhaWhereInput | FalhaWhereInput[]
    OR?: FalhaWhereInput[]
    NOT?: FalhaWhereInput | FalhaWhereInput[]
    descricao?: StringFilter<"Falha"> | string
    data_ocorrencia?: DateTimeFilter<"Falha"> | Date | string
    criticidade?: EnumCriticidadeFilter<"Falha"> | $Enums.Criticidade
    id_ativo?: IntFilter<"Falha"> | number
    ativo?: XOR<AtivoScalarRelationFilter, AtivoWhereInput>
  }, "id">

  export type FalhaOrderByWithAggregationInput = {
    id?: SortOrder
    descricao?: SortOrder
    data_ocorrencia?: SortOrder
    criticidade?: SortOrder
    id_ativo?: SortOrder
    _count?: FalhaCountOrderByAggregateInput
    _avg?: FalhaAvgOrderByAggregateInput
    _max?: FalhaMaxOrderByAggregateInput
    _min?: FalhaMinOrderByAggregateInput
    _sum?: FalhaSumOrderByAggregateInput
  }

  export type FalhaScalarWhereWithAggregatesInput = {
    AND?: FalhaScalarWhereWithAggregatesInput | FalhaScalarWhereWithAggregatesInput[]
    OR?: FalhaScalarWhereWithAggregatesInput[]
    NOT?: FalhaScalarWhereWithAggregatesInput | FalhaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Falha"> | number
    descricao?: StringWithAggregatesFilter<"Falha"> | string
    data_ocorrencia?: DateTimeWithAggregatesFilter<"Falha"> | Date | string
    criticidade?: EnumCriticidadeWithAggregatesFilter<"Falha"> | $Enums.Criticidade
    id_ativo?: IntWithAggregatesFilter<"Falha"> | number
  }

  export type SubativoWhereInput = {
    AND?: SubativoWhereInput | SubativoWhereInput[]
    OR?: SubativoWhereInput[]
    NOT?: SubativoWhereInput | SubativoWhereInput[]
    id?: IntFilter<"Subativo"> | number
    nome?: StringFilter<"Subativo"> | string
    tipo?: StringFilter<"Subativo"> | string
    id_ativo?: IntFilter<"Subativo"> | number
    ativo?: XOR<AtivoScalarRelationFilter, AtivoWhereInput>
  }

  export type SubativoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    id_ativo?: SortOrder
    ativo?: AtivoOrderByWithRelationInput
    _relevance?: SubativoOrderByRelevanceInput
  }

  export type SubativoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SubativoWhereInput | SubativoWhereInput[]
    OR?: SubativoWhereInput[]
    NOT?: SubativoWhereInput | SubativoWhereInput[]
    nome?: StringFilter<"Subativo"> | string
    tipo?: StringFilter<"Subativo"> | string
    id_ativo?: IntFilter<"Subativo"> | number
    ativo?: XOR<AtivoScalarRelationFilter, AtivoWhereInput>
  }, "id">

  export type SubativoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    id_ativo?: SortOrder
    _count?: SubativoCountOrderByAggregateInput
    _avg?: SubativoAvgOrderByAggregateInput
    _max?: SubativoMaxOrderByAggregateInput
    _min?: SubativoMinOrderByAggregateInput
    _sum?: SubativoSumOrderByAggregateInput
  }

  export type SubativoScalarWhereWithAggregatesInput = {
    AND?: SubativoScalarWhereWithAggregatesInput | SubativoScalarWhereWithAggregatesInput[]
    OR?: SubativoScalarWhereWithAggregatesInput[]
    NOT?: SubativoScalarWhereWithAggregatesInput | SubativoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Subativo"> | number
    nome?: StringWithAggregatesFilter<"Subativo"> | string
    tipo?: StringWithAggregatesFilter<"Subativo"> | string
    id_ativo?: IntWithAggregatesFilter<"Subativo"> | number
  }

  export type ManutencaoWhereInput = {
    AND?: ManutencaoWhereInput | ManutencaoWhereInput[]
    OR?: ManutencaoWhereInput[]
    NOT?: ManutencaoWhereInput | ManutencaoWhereInput[]
    id?: IntFilter<"Manutencao"> | number
    tipo?: EnumTipoManutencaoFilter<"Manutencao"> | $Enums.TipoManutencao
    data_inicio?: DateTimeFilter<"Manutencao"> | Date | string
    data_fim?: DateTimeFilter<"Manutencao"> | Date | string
    descricao?: StringFilter<"Manutencao"> | string
    id_ativo?: IntFilter<"Manutencao"> | number
    ativo?: XOR<AtivoScalarRelationFilter, AtivoWhereInput>
  }

  export type ManutencaoOrderByWithRelationInput = {
    id?: SortOrder
    tipo?: SortOrder
    data_inicio?: SortOrder
    data_fim?: SortOrder
    descricao?: SortOrder
    id_ativo?: SortOrder
    ativo?: AtivoOrderByWithRelationInput
    _relevance?: ManutencaoOrderByRelevanceInput
  }

  export type ManutencaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ManutencaoWhereInput | ManutencaoWhereInput[]
    OR?: ManutencaoWhereInput[]
    NOT?: ManutencaoWhereInput | ManutencaoWhereInput[]
    tipo?: EnumTipoManutencaoFilter<"Manutencao"> | $Enums.TipoManutencao
    data_inicio?: DateTimeFilter<"Manutencao"> | Date | string
    data_fim?: DateTimeFilter<"Manutencao"> | Date | string
    descricao?: StringFilter<"Manutencao"> | string
    id_ativo?: IntFilter<"Manutencao"> | number
    ativo?: XOR<AtivoScalarRelationFilter, AtivoWhereInput>
  }, "id">

  export type ManutencaoOrderByWithAggregationInput = {
    id?: SortOrder
    tipo?: SortOrder
    data_inicio?: SortOrder
    data_fim?: SortOrder
    descricao?: SortOrder
    id_ativo?: SortOrder
    _count?: ManutencaoCountOrderByAggregateInput
    _avg?: ManutencaoAvgOrderByAggregateInput
    _max?: ManutencaoMaxOrderByAggregateInput
    _min?: ManutencaoMinOrderByAggregateInput
    _sum?: ManutencaoSumOrderByAggregateInput
  }

  export type ManutencaoScalarWhereWithAggregatesInput = {
    AND?: ManutencaoScalarWhereWithAggregatesInput | ManutencaoScalarWhereWithAggregatesInput[]
    OR?: ManutencaoScalarWhereWithAggregatesInput[]
    NOT?: ManutencaoScalarWhereWithAggregatesInput | ManutencaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Manutencao"> | number
    tipo?: EnumTipoManutencaoWithAggregatesFilter<"Manutencao"> | $Enums.TipoManutencao
    data_inicio?: DateTimeWithAggregatesFilter<"Manutencao"> | Date | string
    data_fim?: DateTimeWithAggregatesFilter<"Manutencao"> | Date | string
    descricao?: StringWithAggregatesFilter<"Manutencao"> | string
    id_ativo?: IntWithAggregatesFilter<"Manutencao"> | number
  }

  export type PlantaCreateInput = {
    nome: string
    localizacao: string
    codigo: string
    area?: AreaCreateNestedManyWithoutPlantaInput
  }

  export type PlantaUncheckedCreateInput = {
    id?: number
    nome: string
    localizacao: string
    codigo: string
    area?: AreaUncheckedCreateNestedManyWithoutPlantaInput
  }

  export type PlantaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    area?: AreaUpdateManyWithoutPlantaNestedInput
  }

  export type PlantaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    area?: AreaUncheckedUpdateManyWithoutPlantaNestedInput
  }

  export type PlantaCreateManyInput = {
    id?: number
    nome: string
    localizacao: string
    codigo: string
  }

  export type PlantaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
  }

  export type PlantaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
  }

  export type AreaCreateInput = {
    nome: string
    codigo: string
    planta: PlantaCreateNestedOneWithoutAreaInput
    sistema?: SistemaCreateNestedManyWithoutAreaInput
  }

  export type AreaUncheckedCreateInput = {
    id?: number
    nome: string
    id_planta: number
    codigo: string
    sistema?: SistemaUncheckedCreateNestedManyWithoutAreaInput
  }

  export type AreaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    planta?: PlantaUpdateOneRequiredWithoutAreaNestedInput
    sistema?: SistemaUpdateManyWithoutAreaNestedInput
  }

  export type AreaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    id_planta?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    sistema?: SistemaUncheckedUpdateManyWithoutAreaNestedInput
  }

  export type AreaCreateManyInput = {
    id?: number
    nome: string
    id_planta: number
    codigo: string
  }

  export type AreaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
  }

  export type AreaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    id_planta?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
  }

  export type SistemaCreateInput = {
    nome: string
    codigo: string
    area: AreaCreateNestedOneWithoutSistemaInput
    ativo?: AtivoCreateNestedManyWithoutSistemaInput
  }

  export type SistemaUncheckedCreateInput = {
    id?: number
    nome: string
    id_area: number
    codigo: string
    ativo?: AtivoUncheckedCreateNestedManyWithoutSistemaInput
  }

  export type SistemaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    area?: AreaUpdateOneRequiredWithoutSistemaNestedInput
    ativo?: AtivoUpdateManyWithoutSistemaNestedInput
  }

  export type SistemaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    id_area?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    ativo?: AtivoUncheckedUpdateManyWithoutSistemaNestedInput
  }

  export type SistemaCreateManyInput = {
    id?: number
    nome: string
    id_area: number
    codigo: string
  }

  export type SistemaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
  }

  export type SistemaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    id_area?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
  }

  export type AtivoCreateInput = {
    nome: string
    codigo_patrimonio: string
    fabricante: string
    modelo: string
    data_aquisicao?: Date | string | null
    localizacao_interna?: string | null
    tipo_ativo: $Enums.TipoAtivo
    situacao?: $Enums.SituacaoAtivo
    criticidade: $Enums.Criticidade
    codigo: string
    sistema: SistemaCreateNestedOneWithoutAtivoInput
    subativos?: SubativoCreateNestedManyWithoutAtivoInput
    manutencoes?: ManutencaoCreateNestedManyWithoutAtivoInput
    falhas?: FalhaCreateNestedManyWithoutAtivoInput
  }

  export type AtivoUncheckedCreateInput = {
    id?: number
    nome: string
    codigo_patrimonio: string
    fabricante: string
    modelo: string
    data_aquisicao?: Date | string | null
    localizacao_interna?: string | null
    tipo_ativo: $Enums.TipoAtivo
    situacao?: $Enums.SituacaoAtivo
    criticidade: $Enums.Criticidade
    id_sistema: number
    codigo: string
    subativos?: SubativoUncheckedCreateNestedManyWithoutAtivoInput
    manutencoes?: ManutencaoUncheckedCreateNestedManyWithoutAtivoInput
    falhas?: FalhaUncheckedCreateNestedManyWithoutAtivoInput
  }

  export type AtivoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    codigo_patrimonio?: StringFieldUpdateOperationsInput | string
    fabricante?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    data_aquisicao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    localizacao_interna?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_ativo?: EnumTipoAtivoFieldUpdateOperationsInput | $Enums.TipoAtivo
    situacao?: EnumSituacaoAtivoFieldUpdateOperationsInput | $Enums.SituacaoAtivo
    criticidade?: EnumCriticidadeFieldUpdateOperationsInput | $Enums.Criticidade
    codigo?: StringFieldUpdateOperationsInput | string
    sistema?: SistemaUpdateOneRequiredWithoutAtivoNestedInput
    subativos?: SubativoUpdateManyWithoutAtivoNestedInput
    manutencoes?: ManutencaoUpdateManyWithoutAtivoNestedInput
    falhas?: FalhaUpdateManyWithoutAtivoNestedInput
  }

  export type AtivoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    codigo_patrimonio?: StringFieldUpdateOperationsInput | string
    fabricante?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    data_aquisicao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    localizacao_interna?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_ativo?: EnumTipoAtivoFieldUpdateOperationsInput | $Enums.TipoAtivo
    situacao?: EnumSituacaoAtivoFieldUpdateOperationsInput | $Enums.SituacaoAtivo
    criticidade?: EnumCriticidadeFieldUpdateOperationsInput | $Enums.Criticidade
    id_sistema?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    subativos?: SubativoUncheckedUpdateManyWithoutAtivoNestedInput
    manutencoes?: ManutencaoUncheckedUpdateManyWithoutAtivoNestedInput
    falhas?: FalhaUncheckedUpdateManyWithoutAtivoNestedInput
  }

  export type AtivoCreateManyInput = {
    id?: number
    nome: string
    codigo_patrimonio: string
    fabricante: string
    modelo: string
    data_aquisicao?: Date | string | null
    localizacao_interna?: string | null
    tipo_ativo: $Enums.TipoAtivo
    situacao?: $Enums.SituacaoAtivo
    criticidade: $Enums.Criticidade
    id_sistema: number
    codigo: string
  }

  export type AtivoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    codigo_patrimonio?: StringFieldUpdateOperationsInput | string
    fabricante?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    data_aquisicao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    localizacao_interna?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_ativo?: EnumTipoAtivoFieldUpdateOperationsInput | $Enums.TipoAtivo
    situacao?: EnumSituacaoAtivoFieldUpdateOperationsInput | $Enums.SituacaoAtivo
    criticidade?: EnumCriticidadeFieldUpdateOperationsInput | $Enums.Criticidade
    codigo?: StringFieldUpdateOperationsInput | string
  }

  export type AtivoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    codigo_patrimonio?: StringFieldUpdateOperationsInput | string
    fabricante?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    data_aquisicao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    localizacao_interna?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_ativo?: EnumTipoAtivoFieldUpdateOperationsInput | $Enums.TipoAtivo
    situacao?: EnumSituacaoAtivoFieldUpdateOperationsInput | $Enums.SituacaoAtivo
    criticidade?: EnumCriticidadeFieldUpdateOperationsInput | $Enums.Criticidade
    id_sistema?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
  }

  export type FalhaCreateInput = {
    descricao: string
    data_ocorrencia: Date | string
    criticidade: $Enums.Criticidade
    ativo: AtivoCreateNestedOneWithoutFalhasInput
  }

  export type FalhaUncheckedCreateInput = {
    id?: number
    descricao: string
    data_ocorrencia: Date | string
    criticidade: $Enums.Criticidade
    id_ativo: number
  }

  export type FalhaUpdateInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    data_ocorrencia?: DateTimeFieldUpdateOperationsInput | Date | string
    criticidade?: EnumCriticidadeFieldUpdateOperationsInput | $Enums.Criticidade
    ativo?: AtivoUpdateOneRequiredWithoutFalhasNestedInput
  }

  export type FalhaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    data_ocorrencia?: DateTimeFieldUpdateOperationsInput | Date | string
    criticidade?: EnumCriticidadeFieldUpdateOperationsInput | $Enums.Criticidade
    id_ativo?: IntFieldUpdateOperationsInput | number
  }

  export type FalhaCreateManyInput = {
    id?: number
    descricao: string
    data_ocorrencia: Date | string
    criticidade: $Enums.Criticidade
    id_ativo: number
  }

  export type FalhaUpdateManyMutationInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    data_ocorrencia?: DateTimeFieldUpdateOperationsInput | Date | string
    criticidade?: EnumCriticidadeFieldUpdateOperationsInput | $Enums.Criticidade
  }

  export type FalhaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    data_ocorrencia?: DateTimeFieldUpdateOperationsInput | Date | string
    criticidade?: EnumCriticidadeFieldUpdateOperationsInput | $Enums.Criticidade
    id_ativo?: IntFieldUpdateOperationsInput | number
  }

  export type SubativoCreateInput = {
    nome: string
    tipo: string
    ativo: AtivoCreateNestedOneWithoutSubativosInput
  }

  export type SubativoUncheckedCreateInput = {
    id?: number
    nome: string
    tipo: string
    id_ativo: number
  }

  export type SubativoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    ativo?: AtivoUpdateOneRequiredWithoutSubativosNestedInput
  }

  export type SubativoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    id_ativo?: IntFieldUpdateOperationsInput | number
  }

  export type SubativoCreateManyInput = {
    id?: number
    nome: string
    tipo: string
    id_ativo: number
  }

  export type SubativoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type SubativoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    id_ativo?: IntFieldUpdateOperationsInput | number
  }

  export type ManutencaoCreateInput = {
    tipo: $Enums.TipoManutencao
    data_inicio: Date | string
    data_fim: Date | string
    descricao: string
    ativo: AtivoCreateNestedOneWithoutManutencoesInput
  }

  export type ManutencaoUncheckedCreateInput = {
    id?: number
    tipo: $Enums.TipoManutencao
    data_inicio: Date | string
    data_fim: Date | string
    descricao: string
    id_ativo: number
  }

  export type ManutencaoUpdateInput = {
    tipo?: EnumTipoManutencaoFieldUpdateOperationsInput | $Enums.TipoManutencao
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: StringFieldUpdateOperationsInput | string
    ativo?: AtivoUpdateOneRequiredWithoutManutencoesNestedInput
  }

  export type ManutencaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: EnumTipoManutencaoFieldUpdateOperationsInput | $Enums.TipoManutencao
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: StringFieldUpdateOperationsInput | string
    id_ativo?: IntFieldUpdateOperationsInput | number
  }

  export type ManutencaoCreateManyInput = {
    id?: number
    tipo: $Enums.TipoManutencao
    data_inicio: Date | string
    data_fim: Date | string
    descricao: string
    id_ativo: number
  }

  export type ManutencaoUpdateManyMutationInput = {
    tipo?: EnumTipoManutencaoFieldUpdateOperationsInput | $Enums.TipoManutencao
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type ManutencaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: EnumTipoManutencaoFieldUpdateOperationsInput | $Enums.TipoManutencao
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: StringFieldUpdateOperationsInput | string
    id_ativo?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type AreaListRelationFilter = {
    every?: AreaWhereInput
    some?: AreaWhereInput
    none?: AreaWhereInput
  }

  export type AreaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlantaOrderByRelevanceInput = {
    fields: PlantaOrderByRelevanceFieldEnum | PlantaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PlantaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    localizacao?: SortOrder
    codigo?: SortOrder
  }

  export type PlantaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PlantaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    localizacao?: SortOrder
    codigo?: SortOrder
  }

  export type PlantaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    localizacao?: SortOrder
    codigo?: SortOrder
  }

  export type PlantaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type PlantaScalarRelationFilter = {
    is?: PlantaWhereInput
    isNot?: PlantaWhereInput
  }

  export type SistemaListRelationFilter = {
    every?: SistemaWhereInput
    some?: SistemaWhereInput
    none?: SistemaWhereInput
  }

  export type SistemaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AreaOrderByRelevanceInput = {
    fields: AreaOrderByRelevanceFieldEnum | AreaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AreaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    id_planta?: SortOrder
    codigo?: SortOrder
  }

  export type AreaAvgOrderByAggregateInput = {
    id?: SortOrder
    id_planta?: SortOrder
  }

  export type AreaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    id_planta?: SortOrder
    codigo?: SortOrder
  }

  export type AreaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    id_planta?: SortOrder
    codigo?: SortOrder
  }

  export type AreaSumOrderByAggregateInput = {
    id?: SortOrder
    id_planta?: SortOrder
  }

  export type AreaScalarRelationFilter = {
    is?: AreaWhereInput
    isNot?: AreaWhereInput
  }

  export type AtivoListRelationFilter = {
    every?: AtivoWhereInput
    some?: AtivoWhereInput
    none?: AtivoWhereInput
  }

  export type AtivoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SistemaOrderByRelevanceInput = {
    fields: SistemaOrderByRelevanceFieldEnum | SistemaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SistemaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    id_area?: SortOrder
    codigo?: SortOrder
  }

  export type SistemaAvgOrderByAggregateInput = {
    id?: SortOrder
    id_area?: SortOrder
  }

  export type SistemaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    id_area?: SortOrder
    codigo?: SortOrder
  }

  export type SistemaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    id_area?: SortOrder
    codigo?: SortOrder
  }

  export type SistemaSumOrderByAggregateInput = {
    id?: SortOrder
    id_area?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumTipoAtivoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoAtivo | EnumTipoAtivoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoAtivo[]
    notIn?: $Enums.TipoAtivo[]
    not?: NestedEnumTipoAtivoFilter<$PrismaModel> | $Enums.TipoAtivo
  }

  export type EnumSituacaoAtivoFilter<$PrismaModel = never> = {
    equals?: $Enums.SituacaoAtivo | EnumSituacaoAtivoFieldRefInput<$PrismaModel>
    in?: $Enums.SituacaoAtivo[]
    notIn?: $Enums.SituacaoAtivo[]
    not?: NestedEnumSituacaoAtivoFilter<$PrismaModel> | $Enums.SituacaoAtivo
  }

  export type EnumCriticidadeFilter<$PrismaModel = never> = {
    equals?: $Enums.Criticidade | EnumCriticidadeFieldRefInput<$PrismaModel>
    in?: $Enums.Criticidade[]
    notIn?: $Enums.Criticidade[]
    not?: NestedEnumCriticidadeFilter<$PrismaModel> | $Enums.Criticidade
  }

  export type SistemaScalarRelationFilter = {
    is?: SistemaWhereInput
    isNot?: SistemaWhereInput
  }

  export type SubativoListRelationFilter = {
    every?: SubativoWhereInput
    some?: SubativoWhereInput
    none?: SubativoWhereInput
  }

  export type ManutencaoListRelationFilter = {
    every?: ManutencaoWhereInput
    some?: ManutencaoWhereInput
    none?: ManutencaoWhereInput
  }

  export type FalhaListRelationFilter = {
    every?: FalhaWhereInput
    some?: FalhaWhereInput
    none?: FalhaWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SubativoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ManutencaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FalhaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AtivoOrderByRelevanceInput = {
    fields: AtivoOrderByRelevanceFieldEnum | AtivoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AtivoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    codigo_patrimonio?: SortOrder
    fabricante?: SortOrder
    modelo?: SortOrder
    data_aquisicao?: SortOrder
    localizacao_interna?: SortOrder
    tipo_ativo?: SortOrder
    situacao?: SortOrder
    criticidade?: SortOrder
    id_sistema?: SortOrder
    codigo?: SortOrder
  }

  export type AtivoAvgOrderByAggregateInput = {
    id?: SortOrder
    id_sistema?: SortOrder
  }

  export type AtivoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    codigo_patrimonio?: SortOrder
    fabricante?: SortOrder
    modelo?: SortOrder
    data_aquisicao?: SortOrder
    localizacao_interna?: SortOrder
    tipo_ativo?: SortOrder
    situacao?: SortOrder
    criticidade?: SortOrder
    id_sistema?: SortOrder
    codigo?: SortOrder
  }

  export type AtivoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    codigo_patrimonio?: SortOrder
    fabricante?: SortOrder
    modelo?: SortOrder
    data_aquisicao?: SortOrder
    localizacao_interna?: SortOrder
    tipo_ativo?: SortOrder
    situacao?: SortOrder
    criticidade?: SortOrder
    id_sistema?: SortOrder
    codigo?: SortOrder
  }

  export type AtivoSumOrderByAggregateInput = {
    id?: SortOrder
    id_sistema?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumTipoAtivoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoAtivo | EnumTipoAtivoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoAtivo[]
    notIn?: $Enums.TipoAtivo[]
    not?: NestedEnumTipoAtivoWithAggregatesFilter<$PrismaModel> | $Enums.TipoAtivo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoAtivoFilter<$PrismaModel>
    _max?: NestedEnumTipoAtivoFilter<$PrismaModel>
  }

  export type EnumSituacaoAtivoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SituacaoAtivo | EnumSituacaoAtivoFieldRefInput<$PrismaModel>
    in?: $Enums.SituacaoAtivo[]
    notIn?: $Enums.SituacaoAtivo[]
    not?: NestedEnumSituacaoAtivoWithAggregatesFilter<$PrismaModel> | $Enums.SituacaoAtivo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSituacaoAtivoFilter<$PrismaModel>
    _max?: NestedEnumSituacaoAtivoFilter<$PrismaModel>
  }

  export type EnumCriticidadeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Criticidade | EnumCriticidadeFieldRefInput<$PrismaModel>
    in?: $Enums.Criticidade[]
    notIn?: $Enums.Criticidade[]
    not?: NestedEnumCriticidadeWithAggregatesFilter<$PrismaModel> | $Enums.Criticidade
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCriticidadeFilter<$PrismaModel>
    _max?: NestedEnumCriticidadeFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AtivoScalarRelationFilter = {
    is?: AtivoWhereInput
    isNot?: AtivoWhereInput
  }

  export type FalhaOrderByRelevanceInput = {
    fields: FalhaOrderByRelevanceFieldEnum | FalhaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FalhaCountOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    data_ocorrencia?: SortOrder
    criticidade?: SortOrder
    id_ativo?: SortOrder
  }

  export type FalhaAvgOrderByAggregateInput = {
    id?: SortOrder
    id_ativo?: SortOrder
  }

  export type FalhaMaxOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    data_ocorrencia?: SortOrder
    criticidade?: SortOrder
    id_ativo?: SortOrder
  }

  export type FalhaMinOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    data_ocorrencia?: SortOrder
    criticidade?: SortOrder
    id_ativo?: SortOrder
  }

  export type FalhaSumOrderByAggregateInput = {
    id?: SortOrder
    id_ativo?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type SubativoOrderByRelevanceInput = {
    fields: SubativoOrderByRelevanceFieldEnum | SubativoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SubativoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    id_ativo?: SortOrder
  }

  export type SubativoAvgOrderByAggregateInput = {
    id?: SortOrder
    id_ativo?: SortOrder
  }

  export type SubativoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    id_ativo?: SortOrder
  }

  export type SubativoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    id_ativo?: SortOrder
  }

  export type SubativoSumOrderByAggregateInput = {
    id?: SortOrder
    id_ativo?: SortOrder
  }

  export type EnumTipoManutencaoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoManutencao | EnumTipoManutencaoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoManutencao[]
    notIn?: $Enums.TipoManutencao[]
    not?: NestedEnumTipoManutencaoFilter<$PrismaModel> | $Enums.TipoManutencao
  }

  export type ManutencaoOrderByRelevanceInput = {
    fields: ManutencaoOrderByRelevanceFieldEnum | ManutencaoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ManutencaoCountOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    data_inicio?: SortOrder
    data_fim?: SortOrder
    descricao?: SortOrder
    id_ativo?: SortOrder
  }

  export type ManutencaoAvgOrderByAggregateInput = {
    id?: SortOrder
    id_ativo?: SortOrder
  }

  export type ManutencaoMaxOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    data_inicio?: SortOrder
    data_fim?: SortOrder
    descricao?: SortOrder
    id_ativo?: SortOrder
  }

  export type ManutencaoMinOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    data_inicio?: SortOrder
    data_fim?: SortOrder
    descricao?: SortOrder
    id_ativo?: SortOrder
  }

  export type ManutencaoSumOrderByAggregateInput = {
    id?: SortOrder
    id_ativo?: SortOrder
  }

  export type EnumTipoManutencaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoManutencao | EnumTipoManutencaoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoManutencao[]
    notIn?: $Enums.TipoManutencao[]
    not?: NestedEnumTipoManutencaoWithAggregatesFilter<$PrismaModel> | $Enums.TipoManutencao
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoManutencaoFilter<$PrismaModel>
    _max?: NestedEnumTipoManutencaoFilter<$PrismaModel>
  }

  export type AreaCreateNestedManyWithoutPlantaInput = {
    create?: XOR<AreaCreateWithoutPlantaInput, AreaUncheckedCreateWithoutPlantaInput> | AreaCreateWithoutPlantaInput[] | AreaUncheckedCreateWithoutPlantaInput[]
    connectOrCreate?: AreaCreateOrConnectWithoutPlantaInput | AreaCreateOrConnectWithoutPlantaInput[]
    createMany?: AreaCreateManyPlantaInputEnvelope
    connect?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
  }

  export type AreaUncheckedCreateNestedManyWithoutPlantaInput = {
    create?: XOR<AreaCreateWithoutPlantaInput, AreaUncheckedCreateWithoutPlantaInput> | AreaCreateWithoutPlantaInput[] | AreaUncheckedCreateWithoutPlantaInput[]
    connectOrCreate?: AreaCreateOrConnectWithoutPlantaInput | AreaCreateOrConnectWithoutPlantaInput[]
    createMany?: AreaCreateManyPlantaInputEnvelope
    connect?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type AreaUpdateManyWithoutPlantaNestedInput = {
    create?: XOR<AreaCreateWithoutPlantaInput, AreaUncheckedCreateWithoutPlantaInput> | AreaCreateWithoutPlantaInput[] | AreaUncheckedCreateWithoutPlantaInput[]
    connectOrCreate?: AreaCreateOrConnectWithoutPlantaInput | AreaCreateOrConnectWithoutPlantaInput[]
    upsert?: AreaUpsertWithWhereUniqueWithoutPlantaInput | AreaUpsertWithWhereUniqueWithoutPlantaInput[]
    createMany?: AreaCreateManyPlantaInputEnvelope
    set?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    disconnect?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    delete?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    connect?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    update?: AreaUpdateWithWhereUniqueWithoutPlantaInput | AreaUpdateWithWhereUniqueWithoutPlantaInput[]
    updateMany?: AreaUpdateManyWithWhereWithoutPlantaInput | AreaUpdateManyWithWhereWithoutPlantaInput[]
    deleteMany?: AreaScalarWhereInput | AreaScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AreaUncheckedUpdateManyWithoutPlantaNestedInput = {
    create?: XOR<AreaCreateWithoutPlantaInput, AreaUncheckedCreateWithoutPlantaInput> | AreaCreateWithoutPlantaInput[] | AreaUncheckedCreateWithoutPlantaInput[]
    connectOrCreate?: AreaCreateOrConnectWithoutPlantaInput | AreaCreateOrConnectWithoutPlantaInput[]
    upsert?: AreaUpsertWithWhereUniqueWithoutPlantaInput | AreaUpsertWithWhereUniqueWithoutPlantaInput[]
    createMany?: AreaCreateManyPlantaInputEnvelope
    set?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    disconnect?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    delete?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    connect?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    update?: AreaUpdateWithWhereUniqueWithoutPlantaInput | AreaUpdateWithWhereUniqueWithoutPlantaInput[]
    updateMany?: AreaUpdateManyWithWhereWithoutPlantaInput | AreaUpdateManyWithWhereWithoutPlantaInput[]
    deleteMany?: AreaScalarWhereInput | AreaScalarWhereInput[]
  }

  export type PlantaCreateNestedOneWithoutAreaInput = {
    create?: XOR<PlantaCreateWithoutAreaInput, PlantaUncheckedCreateWithoutAreaInput>
    connectOrCreate?: PlantaCreateOrConnectWithoutAreaInput
    connect?: PlantaWhereUniqueInput
  }

  export type SistemaCreateNestedManyWithoutAreaInput = {
    create?: XOR<SistemaCreateWithoutAreaInput, SistemaUncheckedCreateWithoutAreaInput> | SistemaCreateWithoutAreaInput[] | SistemaUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: SistemaCreateOrConnectWithoutAreaInput | SistemaCreateOrConnectWithoutAreaInput[]
    createMany?: SistemaCreateManyAreaInputEnvelope
    connect?: SistemaWhereUniqueInput | SistemaWhereUniqueInput[]
  }

  export type SistemaUncheckedCreateNestedManyWithoutAreaInput = {
    create?: XOR<SistemaCreateWithoutAreaInput, SistemaUncheckedCreateWithoutAreaInput> | SistemaCreateWithoutAreaInput[] | SistemaUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: SistemaCreateOrConnectWithoutAreaInput | SistemaCreateOrConnectWithoutAreaInput[]
    createMany?: SistemaCreateManyAreaInputEnvelope
    connect?: SistemaWhereUniqueInput | SistemaWhereUniqueInput[]
  }

  export type PlantaUpdateOneRequiredWithoutAreaNestedInput = {
    create?: XOR<PlantaCreateWithoutAreaInput, PlantaUncheckedCreateWithoutAreaInput>
    connectOrCreate?: PlantaCreateOrConnectWithoutAreaInput
    upsert?: PlantaUpsertWithoutAreaInput
    connect?: PlantaWhereUniqueInput
    update?: XOR<XOR<PlantaUpdateToOneWithWhereWithoutAreaInput, PlantaUpdateWithoutAreaInput>, PlantaUncheckedUpdateWithoutAreaInput>
  }

  export type SistemaUpdateManyWithoutAreaNestedInput = {
    create?: XOR<SistemaCreateWithoutAreaInput, SistemaUncheckedCreateWithoutAreaInput> | SistemaCreateWithoutAreaInput[] | SistemaUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: SistemaCreateOrConnectWithoutAreaInput | SistemaCreateOrConnectWithoutAreaInput[]
    upsert?: SistemaUpsertWithWhereUniqueWithoutAreaInput | SistemaUpsertWithWhereUniqueWithoutAreaInput[]
    createMany?: SistemaCreateManyAreaInputEnvelope
    set?: SistemaWhereUniqueInput | SistemaWhereUniqueInput[]
    disconnect?: SistemaWhereUniqueInput | SistemaWhereUniqueInput[]
    delete?: SistemaWhereUniqueInput | SistemaWhereUniqueInput[]
    connect?: SistemaWhereUniqueInput | SistemaWhereUniqueInput[]
    update?: SistemaUpdateWithWhereUniqueWithoutAreaInput | SistemaUpdateWithWhereUniqueWithoutAreaInput[]
    updateMany?: SistemaUpdateManyWithWhereWithoutAreaInput | SistemaUpdateManyWithWhereWithoutAreaInput[]
    deleteMany?: SistemaScalarWhereInput | SistemaScalarWhereInput[]
  }

  export type SistemaUncheckedUpdateManyWithoutAreaNestedInput = {
    create?: XOR<SistemaCreateWithoutAreaInput, SistemaUncheckedCreateWithoutAreaInput> | SistemaCreateWithoutAreaInput[] | SistemaUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: SistemaCreateOrConnectWithoutAreaInput | SistemaCreateOrConnectWithoutAreaInput[]
    upsert?: SistemaUpsertWithWhereUniqueWithoutAreaInput | SistemaUpsertWithWhereUniqueWithoutAreaInput[]
    createMany?: SistemaCreateManyAreaInputEnvelope
    set?: SistemaWhereUniqueInput | SistemaWhereUniqueInput[]
    disconnect?: SistemaWhereUniqueInput | SistemaWhereUniqueInput[]
    delete?: SistemaWhereUniqueInput | SistemaWhereUniqueInput[]
    connect?: SistemaWhereUniqueInput | SistemaWhereUniqueInput[]
    update?: SistemaUpdateWithWhereUniqueWithoutAreaInput | SistemaUpdateWithWhereUniqueWithoutAreaInput[]
    updateMany?: SistemaUpdateManyWithWhereWithoutAreaInput | SistemaUpdateManyWithWhereWithoutAreaInput[]
    deleteMany?: SistemaScalarWhereInput | SistemaScalarWhereInput[]
  }

  export type AreaCreateNestedOneWithoutSistemaInput = {
    create?: XOR<AreaCreateWithoutSistemaInput, AreaUncheckedCreateWithoutSistemaInput>
    connectOrCreate?: AreaCreateOrConnectWithoutSistemaInput
    connect?: AreaWhereUniqueInput
  }

  export type AtivoCreateNestedManyWithoutSistemaInput = {
    create?: XOR<AtivoCreateWithoutSistemaInput, AtivoUncheckedCreateWithoutSistemaInput> | AtivoCreateWithoutSistemaInput[] | AtivoUncheckedCreateWithoutSistemaInput[]
    connectOrCreate?: AtivoCreateOrConnectWithoutSistemaInput | AtivoCreateOrConnectWithoutSistemaInput[]
    createMany?: AtivoCreateManySistemaInputEnvelope
    connect?: AtivoWhereUniqueInput | AtivoWhereUniqueInput[]
  }

  export type AtivoUncheckedCreateNestedManyWithoutSistemaInput = {
    create?: XOR<AtivoCreateWithoutSistemaInput, AtivoUncheckedCreateWithoutSistemaInput> | AtivoCreateWithoutSistemaInput[] | AtivoUncheckedCreateWithoutSistemaInput[]
    connectOrCreate?: AtivoCreateOrConnectWithoutSistemaInput | AtivoCreateOrConnectWithoutSistemaInput[]
    createMany?: AtivoCreateManySistemaInputEnvelope
    connect?: AtivoWhereUniqueInput | AtivoWhereUniqueInput[]
  }

  export type AreaUpdateOneRequiredWithoutSistemaNestedInput = {
    create?: XOR<AreaCreateWithoutSistemaInput, AreaUncheckedCreateWithoutSistemaInput>
    connectOrCreate?: AreaCreateOrConnectWithoutSistemaInput
    upsert?: AreaUpsertWithoutSistemaInput
    connect?: AreaWhereUniqueInput
    update?: XOR<XOR<AreaUpdateToOneWithWhereWithoutSistemaInput, AreaUpdateWithoutSistemaInput>, AreaUncheckedUpdateWithoutSistemaInput>
  }

  export type AtivoUpdateManyWithoutSistemaNestedInput = {
    create?: XOR<AtivoCreateWithoutSistemaInput, AtivoUncheckedCreateWithoutSistemaInput> | AtivoCreateWithoutSistemaInput[] | AtivoUncheckedCreateWithoutSistemaInput[]
    connectOrCreate?: AtivoCreateOrConnectWithoutSistemaInput | AtivoCreateOrConnectWithoutSistemaInput[]
    upsert?: AtivoUpsertWithWhereUniqueWithoutSistemaInput | AtivoUpsertWithWhereUniqueWithoutSistemaInput[]
    createMany?: AtivoCreateManySistemaInputEnvelope
    set?: AtivoWhereUniqueInput | AtivoWhereUniqueInput[]
    disconnect?: AtivoWhereUniqueInput | AtivoWhereUniqueInput[]
    delete?: AtivoWhereUniqueInput | AtivoWhereUniqueInput[]
    connect?: AtivoWhereUniqueInput | AtivoWhereUniqueInput[]
    update?: AtivoUpdateWithWhereUniqueWithoutSistemaInput | AtivoUpdateWithWhereUniqueWithoutSistemaInput[]
    updateMany?: AtivoUpdateManyWithWhereWithoutSistemaInput | AtivoUpdateManyWithWhereWithoutSistemaInput[]
    deleteMany?: AtivoScalarWhereInput | AtivoScalarWhereInput[]
  }

  export type AtivoUncheckedUpdateManyWithoutSistemaNestedInput = {
    create?: XOR<AtivoCreateWithoutSistemaInput, AtivoUncheckedCreateWithoutSistemaInput> | AtivoCreateWithoutSistemaInput[] | AtivoUncheckedCreateWithoutSistemaInput[]
    connectOrCreate?: AtivoCreateOrConnectWithoutSistemaInput | AtivoCreateOrConnectWithoutSistemaInput[]
    upsert?: AtivoUpsertWithWhereUniqueWithoutSistemaInput | AtivoUpsertWithWhereUniqueWithoutSistemaInput[]
    createMany?: AtivoCreateManySistemaInputEnvelope
    set?: AtivoWhereUniqueInput | AtivoWhereUniqueInput[]
    disconnect?: AtivoWhereUniqueInput | AtivoWhereUniqueInput[]
    delete?: AtivoWhereUniqueInput | AtivoWhereUniqueInput[]
    connect?: AtivoWhereUniqueInput | AtivoWhereUniqueInput[]
    update?: AtivoUpdateWithWhereUniqueWithoutSistemaInput | AtivoUpdateWithWhereUniqueWithoutSistemaInput[]
    updateMany?: AtivoUpdateManyWithWhereWithoutSistemaInput | AtivoUpdateManyWithWhereWithoutSistemaInput[]
    deleteMany?: AtivoScalarWhereInput | AtivoScalarWhereInput[]
  }

  export type SistemaCreateNestedOneWithoutAtivoInput = {
    create?: XOR<SistemaCreateWithoutAtivoInput, SistemaUncheckedCreateWithoutAtivoInput>
    connectOrCreate?: SistemaCreateOrConnectWithoutAtivoInput
    connect?: SistemaWhereUniqueInput
  }

  export type SubativoCreateNestedManyWithoutAtivoInput = {
    create?: XOR<SubativoCreateWithoutAtivoInput, SubativoUncheckedCreateWithoutAtivoInput> | SubativoCreateWithoutAtivoInput[] | SubativoUncheckedCreateWithoutAtivoInput[]
    connectOrCreate?: SubativoCreateOrConnectWithoutAtivoInput | SubativoCreateOrConnectWithoutAtivoInput[]
    createMany?: SubativoCreateManyAtivoInputEnvelope
    connect?: SubativoWhereUniqueInput | SubativoWhereUniqueInput[]
  }

  export type ManutencaoCreateNestedManyWithoutAtivoInput = {
    create?: XOR<ManutencaoCreateWithoutAtivoInput, ManutencaoUncheckedCreateWithoutAtivoInput> | ManutencaoCreateWithoutAtivoInput[] | ManutencaoUncheckedCreateWithoutAtivoInput[]
    connectOrCreate?: ManutencaoCreateOrConnectWithoutAtivoInput | ManutencaoCreateOrConnectWithoutAtivoInput[]
    createMany?: ManutencaoCreateManyAtivoInputEnvelope
    connect?: ManutencaoWhereUniqueInput | ManutencaoWhereUniqueInput[]
  }

  export type FalhaCreateNestedManyWithoutAtivoInput = {
    create?: XOR<FalhaCreateWithoutAtivoInput, FalhaUncheckedCreateWithoutAtivoInput> | FalhaCreateWithoutAtivoInput[] | FalhaUncheckedCreateWithoutAtivoInput[]
    connectOrCreate?: FalhaCreateOrConnectWithoutAtivoInput | FalhaCreateOrConnectWithoutAtivoInput[]
    createMany?: FalhaCreateManyAtivoInputEnvelope
    connect?: FalhaWhereUniqueInput | FalhaWhereUniqueInput[]
  }

  export type SubativoUncheckedCreateNestedManyWithoutAtivoInput = {
    create?: XOR<SubativoCreateWithoutAtivoInput, SubativoUncheckedCreateWithoutAtivoInput> | SubativoCreateWithoutAtivoInput[] | SubativoUncheckedCreateWithoutAtivoInput[]
    connectOrCreate?: SubativoCreateOrConnectWithoutAtivoInput | SubativoCreateOrConnectWithoutAtivoInput[]
    createMany?: SubativoCreateManyAtivoInputEnvelope
    connect?: SubativoWhereUniqueInput | SubativoWhereUniqueInput[]
  }

  export type ManutencaoUncheckedCreateNestedManyWithoutAtivoInput = {
    create?: XOR<ManutencaoCreateWithoutAtivoInput, ManutencaoUncheckedCreateWithoutAtivoInput> | ManutencaoCreateWithoutAtivoInput[] | ManutencaoUncheckedCreateWithoutAtivoInput[]
    connectOrCreate?: ManutencaoCreateOrConnectWithoutAtivoInput | ManutencaoCreateOrConnectWithoutAtivoInput[]
    createMany?: ManutencaoCreateManyAtivoInputEnvelope
    connect?: ManutencaoWhereUniqueInput | ManutencaoWhereUniqueInput[]
  }

  export type FalhaUncheckedCreateNestedManyWithoutAtivoInput = {
    create?: XOR<FalhaCreateWithoutAtivoInput, FalhaUncheckedCreateWithoutAtivoInput> | FalhaCreateWithoutAtivoInput[] | FalhaUncheckedCreateWithoutAtivoInput[]
    connectOrCreate?: FalhaCreateOrConnectWithoutAtivoInput | FalhaCreateOrConnectWithoutAtivoInput[]
    createMany?: FalhaCreateManyAtivoInputEnvelope
    connect?: FalhaWhereUniqueInput | FalhaWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumTipoAtivoFieldUpdateOperationsInput = {
    set?: $Enums.TipoAtivo
  }

  export type EnumSituacaoAtivoFieldUpdateOperationsInput = {
    set?: $Enums.SituacaoAtivo
  }

  export type EnumCriticidadeFieldUpdateOperationsInput = {
    set?: $Enums.Criticidade
  }

  export type SistemaUpdateOneRequiredWithoutAtivoNestedInput = {
    create?: XOR<SistemaCreateWithoutAtivoInput, SistemaUncheckedCreateWithoutAtivoInput>
    connectOrCreate?: SistemaCreateOrConnectWithoutAtivoInput
    upsert?: SistemaUpsertWithoutAtivoInput
    connect?: SistemaWhereUniqueInput
    update?: XOR<XOR<SistemaUpdateToOneWithWhereWithoutAtivoInput, SistemaUpdateWithoutAtivoInput>, SistemaUncheckedUpdateWithoutAtivoInput>
  }

  export type SubativoUpdateManyWithoutAtivoNestedInput = {
    create?: XOR<SubativoCreateWithoutAtivoInput, SubativoUncheckedCreateWithoutAtivoInput> | SubativoCreateWithoutAtivoInput[] | SubativoUncheckedCreateWithoutAtivoInput[]
    connectOrCreate?: SubativoCreateOrConnectWithoutAtivoInput | SubativoCreateOrConnectWithoutAtivoInput[]
    upsert?: SubativoUpsertWithWhereUniqueWithoutAtivoInput | SubativoUpsertWithWhereUniqueWithoutAtivoInput[]
    createMany?: SubativoCreateManyAtivoInputEnvelope
    set?: SubativoWhereUniqueInput | SubativoWhereUniqueInput[]
    disconnect?: SubativoWhereUniqueInput | SubativoWhereUniqueInput[]
    delete?: SubativoWhereUniqueInput | SubativoWhereUniqueInput[]
    connect?: SubativoWhereUniqueInput | SubativoWhereUniqueInput[]
    update?: SubativoUpdateWithWhereUniqueWithoutAtivoInput | SubativoUpdateWithWhereUniqueWithoutAtivoInput[]
    updateMany?: SubativoUpdateManyWithWhereWithoutAtivoInput | SubativoUpdateManyWithWhereWithoutAtivoInput[]
    deleteMany?: SubativoScalarWhereInput | SubativoScalarWhereInput[]
  }

  export type ManutencaoUpdateManyWithoutAtivoNestedInput = {
    create?: XOR<ManutencaoCreateWithoutAtivoInput, ManutencaoUncheckedCreateWithoutAtivoInput> | ManutencaoCreateWithoutAtivoInput[] | ManutencaoUncheckedCreateWithoutAtivoInput[]
    connectOrCreate?: ManutencaoCreateOrConnectWithoutAtivoInput | ManutencaoCreateOrConnectWithoutAtivoInput[]
    upsert?: ManutencaoUpsertWithWhereUniqueWithoutAtivoInput | ManutencaoUpsertWithWhereUniqueWithoutAtivoInput[]
    createMany?: ManutencaoCreateManyAtivoInputEnvelope
    set?: ManutencaoWhereUniqueInput | ManutencaoWhereUniqueInput[]
    disconnect?: ManutencaoWhereUniqueInput | ManutencaoWhereUniqueInput[]
    delete?: ManutencaoWhereUniqueInput | ManutencaoWhereUniqueInput[]
    connect?: ManutencaoWhereUniqueInput | ManutencaoWhereUniqueInput[]
    update?: ManutencaoUpdateWithWhereUniqueWithoutAtivoInput | ManutencaoUpdateWithWhereUniqueWithoutAtivoInput[]
    updateMany?: ManutencaoUpdateManyWithWhereWithoutAtivoInput | ManutencaoUpdateManyWithWhereWithoutAtivoInput[]
    deleteMany?: ManutencaoScalarWhereInput | ManutencaoScalarWhereInput[]
  }

  export type FalhaUpdateManyWithoutAtivoNestedInput = {
    create?: XOR<FalhaCreateWithoutAtivoInput, FalhaUncheckedCreateWithoutAtivoInput> | FalhaCreateWithoutAtivoInput[] | FalhaUncheckedCreateWithoutAtivoInput[]
    connectOrCreate?: FalhaCreateOrConnectWithoutAtivoInput | FalhaCreateOrConnectWithoutAtivoInput[]
    upsert?: FalhaUpsertWithWhereUniqueWithoutAtivoInput | FalhaUpsertWithWhereUniqueWithoutAtivoInput[]
    createMany?: FalhaCreateManyAtivoInputEnvelope
    set?: FalhaWhereUniqueInput | FalhaWhereUniqueInput[]
    disconnect?: FalhaWhereUniqueInput | FalhaWhereUniqueInput[]
    delete?: FalhaWhereUniqueInput | FalhaWhereUniqueInput[]
    connect?: FalhaWhereUniqueInput | FalhaWhereUniqueInput[]
    update?: FalhaUpdateWithWhereUniqueWithoutAtivoInput | FalhaUpdateWithWhereUniqueWithoutAtivoInput[]
    updateMany?: FalhaUpdateManyWithWhereWithoutAtivoInput | FalhaUpdateManyWithWhereWithoutAtivoInput[]
    deleteMany?: FalhaScalarWhereInput | FalhaScalarWhereInput[]
  }

  export type SubativoUncheckedUpdateManyWithoutAtivoNestedInput = {
    create?: XOR<SubativoCreateWithoutAtivoInput, SubativoUncheckedCreateWithoutAtivoInput> | SubativoCreateWithoutAtivoInput[] | SubativoUncheckedCreateWithoutAtivoInput[]
    connectOrCreate?: SubativoCreateOrConnectWithoutAtivoInput | SubativoCreateOrConnectWithoutAtivoInput[]
    upsert?: SubativoUpsertWithWhereUniqueWithoutAtivoInput | SubativoUpsertWithWhereUniqueWithoutAtivoInput[]
    createMany?: SubativoCreateManyAtivoInputEnvelope
    set?: SubativoWhereUniqueInput | SubativoWhereUniqueInput[]
    disconnect?: SubativoWhereUniqueInput | SubativoWhereUniqueInput[]
    delete?: SubativoWhereUniqueInput | SubativoWhereUniqueInput[]
    connect?: SubativoWhereUniqueInput | SubativoWhereUniqueInput[]
    update?: SubativoUpdateWithWhereUniqueWithoutAtivoInput | SubativoUpdateWithWhereUniqueWithoutAtivoInput[]
    updateMany?: SubativoUpdateManyWithWhereWithoutAtivoInput | SubativoUpdateManyWithWhereWithoutAtivoInput[]
    deleteMany?: SubativoScalarWhereInput | SubativoScalarWhereInput[]
  }

  export type ManutencaoUncheckedUpdateManyWithoutAtivoNestedInput = {
    create?: XOR<ManutencaoCreateWithoutAtivoInput, ManutencaoUncheckedCreateWithoutAtivoInput> | ManutencaoCreateWithoutAtivoInput[] | ManutencaoUncheckedCreateWithoutAtivoInput[]
    connectOrCreate?: ManutencaoCreateOrConnectWithoutAtivoInput | ManutencaoCreateOrConnectWithoutAtivoInput[]
    upsert?: ManutencaoUpsertWithWhereUniqueWithoutAtivoInput | ManutencaoUpsertWithWhereUniqueWithoutAtivoInput[]
    createMany?: ManutencaoCreateManyAtivoInputEnvelope
    set?: ManutencaoWhereUniqueInput | ManutencaoWhereUniqueInput[]
    disconnect?: ManutencaoWhereUniqueInput | ManutencaoWhereUniqueInput[]
    delete?: ManutencaoWhereUniqueInput | ManutencaoWhereUniqueInput[]
    connect?: ManutencaoWhereUniqueInput | ManutencaoWhereUniqueInput[]
    update?: ManutencaoUpdateWithWhereUniqueWithoutAtivoInput | ManutencaoUpdateWithWhereUniqueWithoutAtivoInput[]
    updateMany?: ManutencaoUpdateManyWithWhereWithoutAtivoInput | ManutencaoUpdateManyWithWhereWithoutAtivoInput[]
    deleteMany?: ManutencaoScalarWhereInput | ManutencaoScalarWhereInput[]
  }

  export type FalhaUncheckedUpdateManyWithoutAtivoNestedInput = {
    create?: XOR<FalhaCreateWithoutAtivoInput, FalhaUncheckedCreateWithoutAtivoInput> | FalhaCreateWithoutAtivoInput[] | FalhaUncheckedCreateWithoutAtivoInput[]
    connectOrCreate?: FalhaCreateOrConnectWithoutAtivoInput | FalhaCreateOrConnectWithoutAtivoInput[]
    upsert?: FalhaUpsertWithWhereUniqueWithoutAtivoInput | FalhaUpsertWithWhereUniqueWithoutAtivoInput[]
    createMany?: FalhaCreateManyAtivoInputEnvelope
    set?: FalhaWhereUniqueInput | FalhaWhereUniqueInput[]
    disconnect?: FalhaWhereUniqueInput | FalhaWhereUniqueInput[]
    delete?: FalhaWhereUniqueInput | FalhaWhereUniqueInput[]
    connect?: FalhaWhereUniqueInput | FalhaWhereUniqueInput[]
    update?: FalhaUpdateWithWhereUniqueWithoutAtivoInput | FalhaUpdateWithWhereUniqueWithoutAtivoInput[]
    updateMany?: FalhaUpdateManyWithWhereWithoutAtivoInput | FalhaUpdateManyWithWhereWithoutAtivoInput[]
    deleteMany?: FalhaScalarWhereInput | FalhaScalarWhereInput[]
  }

  export type AtivoCreateNestedOneWithoutFalhasInput = {
    create?: XOR<AtivoCreateWithoutFalhasInput, AtivoUncheckedCreateWithoutFalhasInput>
    connectOrCreate?: AtivoCreateOrConnectWithoutFalhasInput
    connect?: AtivoWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AtivoUpdateOneRequiredWithoutFalhasNestedInput = {
    create?: XOR<AtivoCreateWithoutFalhasInput, AtivoUncheckedCreateWithoutFalhasInput>
    connectOrCreate?: AtivoCreateOrConnectWithoutFalhasInput
    upsert?: AtivoUpsertWithoutFalhasInput
    connect?: AtivoWhereUniqueInput
    update?: XOR<XOR<AtivoUpdateToOneWithWhereWithoutFalhasInput, AtivoUpdateWithoutFalhasInput>, AtivoUncheckedUpdateWithoutFalhasInput>
  }

  export type AtivoCreateNestedOneWithoutSubativosInput = {
    create?: XOR<AtivoCreateWithoutSubativosInput, AtivoUncheckedCreateWithoutSubativosInput>
    connectOrCreate?: AtivoCreateOrConnectWithoutSubativosInput
    connect?: AtivoWhereUniqueInput
  }

  export type AtivoUpdateOneRequiredWithoutSubativosNestedInput = {
    create?: XOR<AtivoCreateWithoutSubativosInput, AtivoUncheckedCreateWithoutSubativosInput>
    connectOrCreate?: AtivoCreateOrConnectWithoutSubativosInput
    upsert?: AtivoUpsertWithoutSubativosInput
    connect?: AtivoWhereUniqueInput
    update?: XOR<XOR<AtivoUpdateToOneWithWhereWithoutSubativosInput, AtivoUpdateWithoutSubativosInput>, AtivoUncheckedUpdateWithoutSubativosInput>
  }

  export type AtivoCreateNestedOneWithoutManutencoesInput = {
    create?: XOR<AtivoCreateWithoutManutencoesInput, AtivoUncheckedCreateWithoutManutencoesInput>
    connectOrCreate?: AtivoCreateOrConnectWithoutManutencoesInput
    connect?: AtivoWhereUniqueInput
  }

  export type EnumTipoManutencaoFieldUpdateOperationsInput = {
    set?: $Enums.TipoManutencao
  }

  export type AtivoUpdateOneRequiredWithoutManutencoesNestedInput = {
    create?: XOR<AtivoCreateWithoutManutencoesInput, AtivoUncheckedCreateWithoutManutencoesInput>
    connectOrCreate?: AtivoCreateOrConnectWithoutManutencoesInput
    upsert?: AtivoUpsertWithoutManutencoesInput
    connect?: AtivoWhereUniqueInput
    update?: XOR<XOR<AtivoUpdateToOneWithWhereWithoutManutencoesInput, AtivoUpdateWithoutManutencoesInput>, AtivoUncheckedUpdateWithoutManutencoesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumTipoAtivoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoAtivo | EnumTipoAtivoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoAtivo[]
    notIn?: $Enums.TipoAtivo[]
    not?: NestedEnumTipoAtivoFilter<$PrismaModel> | $Enums.TipoAtivo
  }

  export type NestedEnumSituacaoAtivoFilter<$PrismaModel = never> = {
    equals?: $Enums.SituacaoAtivo | EnumSituacaoAtivoFieldRefInput<$PrismaModel>
    in?: $Enums.SituacaoAtivo[]
    notIn?: $Enums.SituacaoAtivo[]
    not?: NestedEnumSituacaoAtivoFilter<$PrismaModel> | $Enums.SituacaoAtivo
  }

  export type NestedEnumCriticidadeFilter<$PrismaModel = never> = {
    equals?: $Enums.Criticidade | EnumCriticidadeFieldRefInput<$PrismaModel>
    in?: $Enums.Criticidade[]
    notIn?: $Enums.Criticidade[]
    not?: NestedEnumCriticidadeFilter<$PrismaModel> | $Enums.Criticidade
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumTipoAtivoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoAtivo | EnumTipoAtivoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoAtivo[]
    notIn?: $Enums.TipoAtivo[]
    not?: NestedEnumTipoAtivoWithAggregatesFilter<$PrismaModel> | $Enums.TipoAtivo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoAtivoFilter<$PrismaModel>
    _max?: NestedEnumTipoAtivoFilter<$PrismaModel>
  }

  export type NestedEnumSituacaoAtivoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SituacaoAtivo | EnumSituacaoAtivoFieldRefInput<$PrismaModel>
    in?: $Enums.SituacaoAtivo[]
    notIn?: $Enums.SituacaoAtivo[]
    not?: NestedEnumSituacaoAtivoWithAggregatesFilter<$PrismaModel> | $Enums.SituacaoAtivo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSituacaoAtivoFilter<$PrismaModel>
    _max?: NestedEnumSituacaoAtivoFilter<$PrismaModel>
  }

  export type NestedEnumCriticidadeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Criticidade | EnumCriticidadeFieldRefInput<$PrismaModel>
    in?: $Enums.Criticidade[]
    notIn?: $Enums.Criticidade[]
    not?: NestedEnumCriticidadeWithAggregatesFilter<$PrismaModel> | $Enums.Criticidade
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCriticidadeFilter<$PrismaModel>
    _max?: NestedEnumCriticidadeFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumTipoManutencaoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoManutencao | EnumTipoManutencaoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoManutencao[]
    notIn?: $Enums.TipoManutencao[]
    not?: NestedEnumTipoManutencaoFilter<$PrismaModel> | $Enums.TipoManutencao
  }

  export type NestedEnumTipoManutencaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoManutencao | EnumTipoManutencaoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoManutencao[]
    notIn?: $Enums.TipoManutencao[]
    not?: NestedEnumTipoManutencaoWithAggregatesFilter<$PrismaModel> | $Enums.TipoManutencao
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoManutencaoFilter<$PrismaModel>
    _max?: NestedEnumTipoManutencaoFilter<$PrismaModel>
  }

  export type AreaCreateWithoutPlantaInput = {
    nome: string
    codigo: string
    sistema?: SistemaCreateNestedManyWithoutAreaInput
  }

  export type AreaUncheckedCreateWithoutPlantaInput = {
    id?: number
    nome: string
    codigo: string
    sistema?: SistemaUncheckedCreateNestedManyWithoutAreaInput
  }

  export type AreaCreateOrConnectWithoutPlantaInput = {
    where: AreaWhereUniqueInput
    create: XOR<AreaCreateWithoutPlantaInput, AreaUncheckedCreateWithoutPlantaInput>
  }

  export type AreaCreateManyPlantaInputEnvelope = {
    data: AreaCreateManyPlantaInput | AreaCreateManyPlantaInput[]
    skipDuplicates?: boolean
  }

  export type AreaUpsertWithWhereUniqueWithoutPlantaInput = {
    where: AreaWhereUniqueInput
    update: XOR<AreaUpdateWithoutPlantaInput, AreaUncheckedUpdateWithoutPlantaInput>
    create: XOR<AreaCreateWithoutPlantaInput, AreaUncheckedCreateWithoutPlantaInput>
  }

  export type AreaUpdateWithWhereUniqueWithoutPlantaInput = {
    where: AreaWhereUniqueInput
    data: XOR<AreaUpdateWithoutPlantaInput, AreaUncheckedUpdateWithoutPlantaInput>
  }

  export type AreaUpdateManyWithWhereWithoutPlantaInput = {
    where: AreaScalarWhereInput
    data: XOR<AreaUpdateManyMutationInput, AreaUncheckedUpdateManyWithoutPlantaInput>
  }

  export type AreaScalarWhereInput = {
    AND?: AreaScalarWhereInput | AreaScalarWhereInput[]
    OR?: AreaScalarWhereInput[]
    NOT?: AreaScalarWhereInput | AreaScalarWhereInput[]
    id?: IntFilter<"Area"> | number
    nome?: StringFilter<"Area"> | string
    id_planta?: IntFilter<"Area"> | number
    codigo?: StringFilter<"Area"> | string
  }

  export type PlantaCreateWithoutAreaInput = {
    nome: string
    localizacao: string
    codigo: string
  }

  export type PlantaUncheckedCreateWithoutAreaInput = {
    id?: number
    nome: string
    localizacao: string
    codigo: string
  }

  export type PlantaCreateOrConnectWithoutAreaInput = {
    where: PlantaWhereUniqueInput
    create: XOR<PlantaCreateWithoutAreaInput, PlantaUncheckedCreateWithoutAreaInput>
  }

  export type SistemaCreateWithoutAreaInput = {
    nome: string
    codigo: string
    ativo?: AtivoCreateNestedManyWithoutSistemaInput
  }

  export type SistemaUncheckedCreateWithoutAreaInput = {
    id?: number
    nome: string
    codigo: string
    ativo?: AtivoUncheckedCreateNestedManyWithoutSistemaInput
  }

  export type SistemaCreateOrConnectWithoutAreaInput = {
    where: SistemaWhereUniqueInput
    create: XOR<SistemaCreateWithoutAreaInput, SistemaUncheckedCreateWithoutAreaInput>
  }

  export type SistemaCreateManyAreaInputEnvelope = {
    data: SistemaCreateManyAreaInput | SistemaCreateManyAreaInput[]
    skipDuplicates?: boolean
  }

  export type PlantaUpsertWithoutAreaInput = {
    update: XOR<PlantaUpdateWithoutAreaInput, PlantaUncheckedUpdateWithoutAreaInput>
    create: XOR<PlantaCreateWithoutAreaInput, PlantaUncheckedCreateWithoutAreaInput>
    where?: PlantaWhereInput
  }

  export type PlantaUpdateToOneWithWhereWithoutAreaInput = {
    where?: PlantaWhereInput
    data: XOR<PlantaUpdateWithoutAreaInput, PlantaUncheckedUpdateWithoutAreaInput>
  }

  export type PlantaUpdateWithoutAreaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
  }

  export type PlantaUncheckedUpdateWithoutAreaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
  }

  export type SistemaUpsertWithWhereUniqueWithoutAreaInput = {
    where: SistemaWhereUniqueInput
    update: XOR<SistemaUpdateWithoutAreaInput, SistemaUncheckedUpdateWithoutAreaInput>
    create: XOR<SistemaCreateWithoutAreaInput, SistemaUncheckedCreateWithoutAreaInput>
  }

  export type SistemaUpdateWithWhereUniqueWithoutAreaInput = {
    where: SistemaWhereUniqueInput
    data: XOR<SistemaUpdateWithoutAreaInput, SistemaUncheckedUpdateWithoutAreaInput>
  }

  export type SistemaUpdateManyWithWhereWithoutAreaInput = {
    where: SistemaScalarWhereInput
    data: XOR<SistemaUpdateManyMutationInput, SistemaUncheckedUpdateManyWithoutAreaInput>
  }

  export type SistemaScalarWhereInput = {
    AND?: SistemaScalarWhereInput | SistemaScalarWhereInput[]
    OR?: SistemaScalarWhereInput[]
    NOT?: SistemaScalarWhereInput | SistemaScalarWhereInput[]
    id?: IntFilter<"Sistema"> | number
    nome?: StringFilter<"Sistema"> | string
    id_area?: IntFilter<"Sistema"> | number
    codigo?: StringFilter<"Sistema"> | string
  }

  export type AreaCreateWithoutSistemaInput = {
    nome: string
    codigo: string
    planta: PlantaCreateNestedOneWithoutAreaInput
  }

  export type AreaUncheckedCreateWithoutSistemaInput = {
    id?: number
    nome: string
    id_planta: number
    codigo: string
  }

  export type AreaCreateOrConnectWithoutSistemaInput = {
    where: AreaWhereUniqueInput
    create: XOR<AreaCreateWithoutSistemaInput, AreaUncheckedCreateWithoutSistemaInput>
  }

  export type AtivoCreateWithoutSistemaInput = {
    nome: string
    codigo_patrimonio: string
    fabricante: string
    modelo: string
    data_aquisicao?: Date | string | null
    localizacao_interna?: string | null
    tipo_ativo: $Enums.TipoAtivo
    situacao?: $Enums.SituacaoAtivo
    criticidade: $Enums.Criticidade
    codigo: string
    subativos?: SubativoCreateNestedManyWithoutAtivoInput
    manutencoes?: ManutencaoCreateNestedManyWithoutAtivoInput
    falhas?: FalhaCreateNestedManyWithoutAtivoInput
  }

  export type AtivoUncheckedCreateWithoutSistemaInput = {
    id?: number
    nome: string
    codigo_patrimonio: string
    fabricante: string
    modelo: string
    data_aquisicao?: Date | string | null
    localizacao_interna?: string | null
    tipo_ativo: $Enums.TipoAtivo
    situacao?: $Enums.SituacaoAtivo
    criticidade: $Enums.Criticidade
    codigo: string
    subativos?: SubativoUncheckedCreateNestedManyWithoutAtivoInput
    manutencoes?: ManutencaoUncheckedCreateNestedManyWithoutAtivoInput
    falhas?: FalhaUncheckedCreateNestedManyWithoutAtivoInput
  }

  export type AtivoCreateOrConnectWithoutSistemaInput = {
    where: AtivoWhereUniqueInput
    create: XOR<AtivoCreateWithoutSistemaInput, AtivoUncheckedCreateWithoutSistemaInput>
  }

  export type AtivoCreateManySistemaInputEnvelope = {
    data: AtivoCreateManySistemaInput | AtivoCreateManySistemaInput[]
    skipDuplicates?: boolean
  }

  export type AreaUpsertWithoutSistemaInput = {
    update: XOR<AreaUpdateWithoutSistemaInput, AreaUncheckedUpdateWithoutSistemaInput>
    create: XOR<AreaCreateWithoutSistemaInput, AreaUncheckedCreateWithoutSistemaInput>
    where?: AreaWhereInput
  }

  export type AreaUpdateToOneWithWhereWithoutSistemaInput = {
    where?: AreaWhereInput
    data: XOR<AreaUpdateWithoutSistemaInput, AreaUncheckedUpdateWithoutSistemaInput>
  }

  export type AreaUpdateWithoutSistemaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    planta?: PlantaUpdateOneRequiredWithoutAreaNestedInput
  }

  export type AreaUncheckedUpdateWithoutSistemaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    id_planta?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
  }

  export type AtivoUpsertWithWhereUniqueWithoutSistemaInput = {
    where: AtivoWhereUniqueInput
    update: XOR<AtivoUpdateWithoutSistemaInput, AtivoUncheckedUpdateWithoutSistemaInput>
    create: XOR<AtivoCreateWithoutSistemaInput, AtivoUncheckedCreateWithoutSistemaInput>
  }

  export type AtivoUpdateWithWhereUniqueWithoutSistemaInput = {
    where: AtivoWhereUniqueInput
    data: XOR<AtivoUpdateWithoutSistemaInput, AtivoUncheckedUpdateWithoutSistemaInput>
  }

  export type AtivoUpdateManyWithWhereWithoutSistemaInput = {
    where: AtivoScalarWhereInput
    data: XOR<AtivoUpdateManyMutationInput, AtivoUncheckedUpdateManyWithoutSistemaInput>
  }

  export type AtivoScalarWhereInput = {
    AND?: AtivoScalarWhereInput | AtivoScalarWhereInput[]
    OR?: AtivoScalarWhereInput[]
    NOT?: AtivoScalarWhereInput | AtivoScalarWhereInput[]
    id?: IntFilter<"Ativo"> | number
    nome?: StringFilter<"Ativo"> | string
    codigo_patrimonio?: StringFilter<"Ativo"> | string
    fabricante?: StringFilter<"Ativo"> | string
    modelo?: StringFilter<"Ativo"> | string
    data_aquisicao?: DateTimeNullableFilter<"Ativo"> | Date | string | null
    localizacao_interna?: StringNullableFilter<"Ativo"> | string | null
    tipo_ativo?: EnumTipoAtivoFilter<"Ativo"> | $Enums.TipoAtivo
    situacao?: EnumSituacaoAtivoFilter<"Ativo"> | $Enums.SituacaoAtivo
    criticidade?: EnumCriticidadeFilter<"Ativo"> | $Enums.Criticidade
    id_sistema?: IntFilter<"Ativo"> | number
    codigo?: StringFilter<"Ativo"> | string
  }

  export type SistemaCreateWithoutAtivoInput = {
    nome: string
    codigo: string
    area: AreaCreateNestedOneWithoutSistemaInput
  }

  export type SistemaUncheckedCreateWithoutAtivoInput = {
    id?: number
    nome: string
    id_area: number
    codigo: string
  }

  export type SistemaCreateOrConnectWithoutAtivoInput = {
    where: SistemaWhereUniqueInput
    create: XOR<SistemaCreateWithoutAtivoInput, SistemaUncheckedCreateWithoutAtivoInput>
  }

  export type SubativoCreateWithoutAtivoInput = {
    nome: string
    tipo: string
  }

  export type SubativoUncheckedCreateWithoutAtivoInput = {
    id?: number
    nome: string
    tipo: string
  }

  export type SubativoCreateOrConnectWithoutAtivoInput = {
    where: SubativoWhereUniqueInput
    create: XOR<SubativoCreateWithoutAtivoInput, SubativoUncheckedCreateWithoutAtivoInput>
  }

  export type SubativoCreateManyAtivoInputEnvelope = {
    data: SubativoCreateManyAtivoInput | SubativoCreateManyAtivoInput[]
    skipDuplicates?: boolean
  }

  export type ManutencaoCreateWithoutAtivoInput = {
    tipo: $Enums.TipoManutencao
    data_inicio: Date | string
    data_fim: Date | string
    descricao: string
  }

  export type ManutencaoUncheckedCreateWithoutAtivoInput = {
    id?: number
    tipo: $Enums.TipoManutencao
    data_inicio: Date | string
    data_fim: Date | string
    descricao: string
  }

  export type ManutencaoCreateOrConnectWithoutAtivoInput = {
    where: ManutencaoWhereUniqueInput
    create: XOR<ManutencaoCreateWithoutAtivoInput, ManutencaoUncheckedCreateWithoutAtivoInput>
  }

  export type ManutencaoCreateManyAtivoInputEnvelope = {
    data: ManutencaoCreateManyAtivoInput | ManutencaoCreateManyAtivoInput[]
    skipDuplicates?: boolean
  }

  export type FalhaCreateWithoutAtivoInput = {
    descricao: string
    data_ocorrencia: Date | string
    criticidade: $Enums.Criticidade
  }

  export type FalhaUncheckedCreateWithoutAtivoInput = {
    id?: number
    descricao: string
    data_ocorrencia: Date | string
    criticidade: $Enums.Criticidade
  }

  export type FalhaCreateOrConnectWithoutAtivoInput = {
    where: FalhaWhereUniqueInput
    create: XOR<FalhaCreateWithoutAtivoInput, FalhaUncheckedCreateWithoutAtivoInput>
  }

  export type FalhaCreateManyAtivoInputEnvelope = {
    data: FalhaCreateManyAtivoInput | FalhaCreateManyAtivoInput[]
    skipDuplicates?: boolean
  }

  export type SistemaUpsertWithoutAtivoInput = {
    update: XOR<SistemaUpdateWithoutAtivoInput, SistemaUncheckedUpdateWithoutAtivoInput>
    create: XOR<SistemaCreateWithoutAtivoInput, SistemaUncheckedCreateWithoutAtivoInput>
    where?: SistemaWhereInput
  }

  export type SistemaUpdateToOneWithWhereWithoutAtivoInput = {
    where?: SistemaWhereInput
    data: XOR<SistemaUpdateWithoutAtivoInput, SistemaUncheckedUpdateWithoutAtivoInput>
  }

  export type SistemaUpdateWithoutAtivoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    area?: AreaUpdateOneRequiredWithoutSistemaNestedInput
  }

  export type SistemaUncheckedUpdateWithoutAtivoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    id_area?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
  }

  export type SubativoUpsertWithWhereUniqueWithoutAtivoInput = {
    where: SubativoWhereUniqueInput
    update: XOR<SubativoUpdateWithoutAtivoInput, SubativoUncheckedUpdateWithoutAtivoInput>
    create: XOR<SubativoCreateWithoutAtivoInput, SubativoUncheckedCreateWithoutAtivoInput>
  }

  export type SubativoUpdateWithWhereUniqueWithoutAtivoInput = {
    where: SubativoWhereUniqueInput
    data: XOR<SubativoUpdateWithoutAtivoInput, SubativoUncheckedUpdateWithoutAtivoInput>
  }

  export type SubativoUpdateManyWithWhereWithoutAtivoInput = {
    where: SubativoScalarWhereInput
    data: XOR<SubativoUpdateManyMutationInput, SubativoUncheckedUpdateManyWithoutAtivoInput>
  }

  export type SubativoScalarWhereInput = {
    AND?: SubativoScalarWhereInput | SubativoScalarWhereInput[]
    OR?: SubativoScalarWhereInput[]
    NOT?: SubativoScalarWhereInput | SubativoScalarWhereInput[]
    id?: IntFilter<"Subativo"> | number
    nome?: StringFilter<"Subativo"> | string
    tipo?: StringFilter<"Subativo"> | string
    id_ativo?: IntFilter<"Subativo"> | number
  }

  export type ManutencaoUpsertWithWhereUniqueWithoutAtivoInput = {
    where: ManutencaoWhereUniqueInput
    update: XOR<ManutencaoUpdateWithoutAtivoInput, ManutencaoUncheckedUpdateWithoutAtivoInput>
    create: XOR<ManutencaoCreateWithoutAtivoInput, ManutencaoUncheckedCreateWithoutAtivoInput>
  }

  export type ManutencaoUpdateWithWhereUniqueWithoutAtivoInput = {
    where: ManutencaoWhereUniqueInput
    data: XOR<ManutencaoUpdateWithoutAtivoInput, ManutencaoUncheckedUpdateWithoutAtivoInput>
  }

  export type ManutencaoUpdateManyWithWhereWithoutAtivoInput = {
    where: ManutencaoScalarWhereInput
    data: XOR<ManutencaoUpdateManyMutationInput, ManutencaoUncheckedUpdateManyWithoutAtivoInput>
  }

  export type ManutencaoScalarWhereInput = {
    AND?: ManutencaoScalarWhereInput | ManutencaoScalarWhereInput[]
    OR?: ManutencaoScalarWhereInput[]
    NOT?: ManutencaoScalarWhereInput | ManutencaoScalarWhereInput[]
    id?: IntFilter<"Manutencao"> | number
    tipo?: EnumTipoManutencaoFilter<"Manutencao"> | $Enums.TipoManutencao
    data_inicio?: DateTimeFilter<"Manutencao"> | Date | string
    data_fim?: DateTimeFilter<"Manutencao"> | Date | string
    descricao?: StringFilter<"Manutencao"> | string
    id_ativo?: IntFilter<"Manutencao"> | number
  }

  export type FalhaUpsertWithWhereUniqueWithoutAtivoInput = {
    where: FalhaWhereUniqueInput
    update: XOR<FalhaUpdateWithoutAtivoInput, FalhaUncheckedUpdateWithoutAtivoInput>
    create: XOR<FalhaCreateWithoutAtivoInput, FalhaUncheckedCreateWithoutAtivoInput>
  }

  export type FalhaUpdateWithWhereUniqueWithoutAtivoInput = {
    where: FalhaWhereUniqueInput
    data: XOR<FalhaUpdateWithoutAtivoInput, FalhaUncheckedUpdateWithoutAtivoInput>
  }

  export type FalhaUpdateManyWithWhereWithoutAtivoInput = {
    where: FalhaScalarWhereInput
    data: XOR<FalhaUpdateManyMutationInput, FalhaUncheckedUpdateManyWithoutAtivoInput>
  }

  export type FalhaScalarWhereInput = {
    AND?: FalhaScalarWhereInput | FalhaScalarWhereInput[]
    OR?: FalhaScalarWhereInput[]
    NOT?: FalhaScalarWhereInput | FalhaScalarWhereInput[]
    id?: IntFilter<"Falha"> | number
    descricao?: StringFilter<"Falha"> | string
    data_ocorrencia?: DateTimeFilter<"Falha"> | Date | string
    criticidade?: EnumCriticidadeFilter<"Falha"> | $Enums.Criticidade
    id_ativo?: IntFilter<"Falha"> | number
  }

  export type AtivoCreateWithoutFalhasInput = {
    nome: string
    codigo_patrimonio: string
    fabricante: string
    modelo: string
    data_aquisicao?: Date | string | null
    localizacao_interna?: string | null
    tipo_ativo: $Enums.TipoAtivo
    situacao?: $Enums.SituacaoAtivo
    criticidade: $Enums.Criticidade
    codigo: string
    sistema: SistemaCreateNestedOneWithoutAtivoInput
    subativos?: SubativoCreateNestedManyWithoutAtivoInput
    manutencoes?: ManutencaoCreateNestedManyWithoutAtivoInput
  }

  export type AtivoUncheckedCreateWithoutFalhasInput = {
    id?: number
    nome: string
    codigo_patrimonio: string
    fabricante: string
    modelo: string
    data_aquisicao?: Date | string | null
    localizacao_interna?: string | null
    tipo_ativo: $Enums.TipoAtivo
    situacao?: $Enums.SituacaoAtivo
    criticidade: $Enums.Criticidade
    id_sistema: number
    codigo: string
    subativos?: SubativoUncheckedCreateNestedManyWithoutAtivoInput
    manutencoes?: ManutencaoUncheckedCreateNestedManyWithoutAtivoInput
  }

  export type AtivoCreateOrConnectWithoutFalhasInput = {
    where: AtivoWhereUniqueInput
    create: XOR<AtivoCreateWithoutFalhasInput, AtivoUncheckedCreateWithoutFalhasInput>
  }

  export type AtivoUpsertWithoutFalhasInput = {
    update: XOR<AtivoUpdateWithoutFalhasInput, AtivoUncheckedUpdateWithoutFalhasInput>
    create: XOR<AtivoCreateWithoutFalhasInput, AtivoUncheckedCreateWithoutFalhasInput>
    where?: AtivoWhereInput
  }

  export type AtivoUpdateToOneWithWhereWithoutFalhasInput = {
    where?: AtivoWhereInput
    data: XOR<AtivoUpdateWithoutFalhasInput, AtivoUncheckedUpdateWithoutFalhasInput>
  }

  export type AtivoUpdateWithoutFalhasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    codigo_patrimonio?: StringFieldUpdateOperationsInput | string
    fabricante?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    data_aquisicao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    localizacao_interna?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_ativo?: EnumTipoAtivoFieldUpdateOperationsInput | $Enums.TipoAtivo
    situacao?: EnumSituacaoAtivoFieldUpdateOperationsInput | $Enums.SituacaoAtivo
    criticidade?: EnumCriticidadeFieldUpdateOperationsInput | $Enums.Criticidade
    codigo?: StringFieldUpdateOperationsInput | string
    sistema?: SistemaUpdateOneRequiredWithoutAtivoNestedInput
    subativos?: SubativoUpdateManyWithoutAtivoNestedInput
    manutencoes?: ManutencaoUpdateManyWithoutAtivoNestedInput
  }

  export type AtivoUncheckedUpdateWithoutFalhasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    codigo_patrimonio?: StringFieldUpdateOperationsInput | string
    fabricante?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    data_aquisicao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    localizacao_interna?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_ativo?: EnumTipoAtivoFieldUpdateOperationsInput | $Enums.TipoAtivo
    situacao?: EnumSituacaoAtivoFieldUpdateOperationsInput | $Enums.SituacaoAtivo
    criticidade?: EnumCriticidadeFieldUpdateOperationsInput | $Enums.Criticidade
    id_sistema?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    subativos?: SubativoUncheckedUpdateManyWithoutAtivoNestedInput
    manutencoes?: ManutencaoUncheckedUpdateManyWithoutAtivoNestedInput
  }

  export type AtivoCreateWithoutSubativosInput = {
    nome: string
    codigo_patrimonio: string
    fabricante: string
    modelo: string
    data_aquisicao?: Date | string | null
    localizacao_interna?: string | null
    tipo_ativo: $Enums.TipoAtivo
    situacao?: $Enums.SituacaoAtivo
    criticidade: $Enums.Criticidade
    codigo: string
    sistema: SistemaCreateNestedOneWithoutAtivoInput
    manutencoes?: ManutencaoCreateNestedManyWithoutAtivoInput
    falhas?: FalhaCreateNestedManyWithoutAtivoInput
  }

  export type AtivoUncheckedCreateWithoutSubativosInput = {
    id?: number
    nome: string
    codigo_patrimonio: string
    fabricante: string
    modelo: string
    data_aquisicao?: Date | string | null
    localizacao_interna?: string | null
    tipo_ativo: $Enums.TipoAtivo
    situacao?: $Enums.SituacaoAtivo
    criticidade: $Enums.Criticidade
    id_sistema: number
    codigo: string
    manutencoes?: ManutencaoUncheckedCreateNestedManyWithoutAtivoInput
    falhas?: FalhaUncheckedCreateNestedManyWithoutAtivoInput
  }

  export type AtivoCreateOrConnectWithoutSubativosInput = {
    where: AtivoWhereUniqueInput
    create: XOR<AtivoCreateWithoutSubativosInput, AtivoUncheckedCreateWithoutSubativosInput>
  }

  export type AtivoUpsertWithoutSubativosInput = {
    update: XOR<AtivoUpdateWithoutSubativosInput, AtivoUncheckedUpdateWithoutSubativosInput>
    create: XOR<AtivoCreateWithoutSubativosInput, AtivoUncheckedCreateWithoutSubativosInput>
    where?: AtivoWhereInput
  }

  export type AtivoUpdateToOneWithWhereWithoutSubativosInput = {
    where?: AtivoWhereInput
    data: XOR<AtivoUpdateWithoutSubativosInput, AtivoUncheckedUpdateWithoutSubativosInput>
  }

  export type AtivoUpdateWithoutSubativosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    codigo_patrimonio?: StringFieldUpdateOperationsInput | string
    fabricante?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    data_aquisicao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    localizacao_interna?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_ativo?: EnumTipoAtivoFieldUpdateOperationsInput | $Enums.TipoAtivo
    situacao?: EnumSituacaoAtivoFieldUpdateOperationsInput | $Enums.SituacaoAtivo
    criticidade?: EnumCriticidadeFieldUpdateOperationsInput | $Enums.Criticidade
    codigo?: StringFieldUpdateOperationsInput | string
    sistema?: SistemaUpdateOneRequiredWithoutAtivoNestedInput
    manutencoes?: ManutencaoUpdateManyWithoutAtivoNestedInput
    falhas?: FalhaUpdateManyWithoutAtivoNestedInput
  }

  export type AtivoUncheckedUpdateWithoutSubativosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    codigo_patrimonio?: StringFieldUpdateOperationsInput | string
    fabricante?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    data_aquisicao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    localizacao_interna?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_ativo?: EnumTipoAtivoFieldUpdateOperationsInput | $Enums.TipoAtivo
    situacao?: EnumSituacaoAtivoFieldUpdateOperationsInput | $Enums.SituacaoAtivo
    criticidade?: EnumCriticidadeFieldUpdateOperationsInput | $Enums.Criticidade
    id_sistema?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    manutencoes?: ManutencaoUncheckedUpdateManyWithoutAtivoNestedInput
    falhas?: FalhaUncheckedUpdateManyWithoutAtivoNestedInput
  }

  export type AtivoCreateWithoutManutencoesInput = {
    nome: string
    codigo_patrimonio: string
    fabricante: string
    modelo: string
    data_aquisicao?: Date | string | null
    localizacao_interna?: string | null
    tipo_ativo: $Enums.TipoAtivo
    situacao?: $Enums.SituacaoAtivo
    criticidade: $Enums.Criticidade
    codigo: string
    sistema: SistemaCreateNestedOneWithoutAtivoInput
    subativos?: SubativoCreateNestedManyWithoutAtivoInput
    falhas?: FalhaCreateNestedManyWithoutAtivoInput
  }

  export type AtivoUncheckedCreateWithoutManutencoesInput = {
    id?: number
    nome: string
    codigo_patrimonio: string
    fabricante: string
    modelo: string
    data_aquisicao?: Date | string | null
    localizacao_interna?: string | null
    tipo_ativo: $Enums.TipoAtivo
    situacao?: $Enums.SituacaoAtivo
    criticidade: $Enums.Criticidade
    id_sistema: number
    codigo: string
    subativos?: SubativoUncheckedCreateNestedManyWithoutAtivoInput
    falhas?: FalhaUncheckedCreateNestedManyWithoutAtivoInput
  }

  export type AtivoCreateOrConnectWithoutManutencoesInput = {
    where: AtivoWhereUniqueInput
    create: XOR<AtivoCreateWithoutManutencoesInput, AtivoUncheckedCreateWithoutManutencoesInput>
  }

  export type AtivoUpsertWithoutManutencoesInput = {
    update: XOR<AtivoUpdateWithoutManutencoesInput, AtivoUncheckedUpdateWithoutManutencoesInput>
    create: XOR<AtivoCreateWithoutManutencoesInput, AtivoUncheckedCreateWithoutManutencoesInput>
    where?: AtivoWhereInput
  }

  export type AtivoUpdateToOneWithWhereWithoutManutencoesInput = {
    where?: AtivoWhereInput
    data: XOR<AtivoUpdateWithoutManutencoesInput, AtivoUncheckedUpdateWithoutManutencoesInput>
  }

  export type AtivoUpdateWithoutManutencoesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    codigo_patrimonio?: StringFieldUpdateOperationsInput | string
    fabricante?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    data_aquisicao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    localizacao_interna?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_ativo?: EnumTipoAtivoFieldUpdateOperationsInput | $Enums.TipoAtivo
    situacao?: EnumSituacaoAtivoFieldUpdateOperationsInput | $Enums.SituacaoAtivo
    criticidade?: EnumCriticidadeFieldUpdateOperationsInput | $Enums.Criticidade
    codigo?: StringFieldUpdateOperationsInput | string
    sistema?: SistemaUpdateOneRequiredWithoutAtivoNestedInput
    subativos?: SubativoUpdateManyWithoutAtivoNestedInput
    falhas?: FalhaUpdateManyWithoutAtivoNestedInput
  }

  export type AtivoUncheckedUpdateWithoutManutencoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    codigo_patrimonio?: StringFieldUpdateOperationsInput | string
    fabricante?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    data_aquisicao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    localizacao_interna?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_ativo?: EnumTipoAtivoFieldUpdateOperationsInput | $Enums.TipoAtivo
    situacao?: EnumSituacaoAtivoFieldUpdateOperationsInput | $Enums.SituacaoAtivo
    criticidade?: EnumCriticidadeFieldUpdateOperationsInput | $Enums.Criticidade
    id_sistema?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    subativos?: SubativoUncheckedUpdateManyWithoutAtivoNestedInput
    falhas?: FalhaUncheckedUpdateManyWithoutAtivoNestedInput
  }

  export type AreaCreateManyPlantaInput = {
    id?: number
    nome: string
    codigo: string
  }

  export type AreaUpdateWithoutPlantaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    sistema?: SistemaUpdateManyWithoutAreaNestedInput
  }

  export type AreaUncheckedUpdateWithoutPlantaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    sistema?: SistemaUncheckedUpdateManyWithoutAreaNestedInput
  }

  export type AreaUncheckedUpdateManyWithoutPlantaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
  }

  export type SistemaCreateManyAreaInput = {
    id?: number
    nome: string
    codigo: string
  }

  export type SistemaUpdateWithoutAreaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    ativo?: AtivoUpdateManyWithoutSistemaNestedInput
  }

  export type SistemaUncheckedUpdateWithoutAreaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    ativo?: AtivoUncheckedUpdateManyWithoutSistemaNestedInput
  }

  export type SistemaUncheckedUpdateManyWithoutAreaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
  }

  export type AtivoCreateManySistemaInput = {
    id?: number
    nome: string
    codigo_patrimonio: string
    fabricante: string
    modelo: string
    data_aquisicao?: Date | string | null
    localizacao_interna?: string | null
    tipo_ativo: $Enums.TipoAtivo
    situacao?: $Enums.SituacaoAtivo
    criticidade: $Enums.Criticidade
    codigo: string
  }

  export type AtivoUpdateWithoutSistemaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    codigo_patrimonio?: StringFieldUpdateOperationsInput | string
    fabricante?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    data_aquisicao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    localizacao_interna?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_ativo?: EnumTipoAtivoFieldUpdateOperationsInput | $Enums.TipoAtivo
    situacao?: EnumSituacaoAtivoFieldUpdateOperationsInput | $Enums.SituacaoAtivo
    criticidade?: EnumCriticidadeFieldUpdateOperationsInput | $Enums.Criticidade
    codigo?: StringFieldUpdateOperationsInput | string
    subativos?: SubativoUpdateManyWithoutAtivoNestedInput
    manutencoes?: ManutencaoUpdateManyWithoutAtivoNestedInput
    falhas?: FalhaUpdateManyWithoutAtivoNestedInput
  }

  export type AtivoUncheckedUpdateWithoutSistemaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    codigo_patrimonio?: StringFieldUpdateOperationsInput | string
    fabricante?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    data_aquisicao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    localizacao_interna?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_ativo?: EnumTipoAtivoFieldUpdateOperationsInput | $Enums.TipoAtivo
    situacao?: EnumSituacaoAtivoFieldUpdateOperationsInput | $Enums.SituacaoAtivo
    criticidade?: EnumCriticidadeFieldUpdateOperationsInput | $Enums.Criticidade
    codigo?: StringFieldUpdateOperationsInput | string
    subativos?: SubativoUncheckedUpdateManyWithoutAtivoNestedInput
    manutencoes?: ManutencaoUncheckedUpdateManyWithoutAtivoNestedInput
    falhas?: FalhaUncheckedUpdateManyWithoutAtivoNestedInput
  }

  export type AtivoUncheckedUpdateManyWithoutSistemaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    codigo_patrimonio?: StringFieldUpdateOperationsInput | string
    fabricante?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    data_aquisicao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    localizacao_interna?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_ativo?: EnumTipoAtivoFieldUpdateOperationsInput | $Enums.TipoAtivo
    situacao?: EnumSituacaoAtivoFieldUpdateOperationsInput | $Enums.SituacaoAtivo
    criticidade?: EnumCriticidadeFieldUpdateOperationsInput | $Enums.Criticidade
    codigo?: StringFieldUpdateOperationsInput | string
  }

  export type SubativoCreateManyAtivoInput = {
    id?: number
    nome: string
    tipo: string
  }

  export type ManutencaoCreateManyAtivoInput = {
    id?: number
    tipo: $Enums.TipoManutencao
    data_inicio: Date | string
    data_fim: Date | string
    descricao: string
  }

  export type FalhaCreateManyAtivoInput = {
    id?: number
    descricao: string
    data_ocorrencia: Date | string
    criticidade: $Enums.Criticidade
  }

  export type SubativoUpdateWithoutAtivoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type SubativoUncheckedUpdateWithoutAtivoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type SubativoUncheckedUpdateManyWithoutAtivoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type ManutencaoUpdateWithoutAtivoInput = {
    tipo?: EnumTipoManutencaoFieldUpdateOperationsInput | $Enums.TipoManutencao
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type ManutencaoUncheckedUpdateWithoutAtivoInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: EnumTipoManutencaoFieldUpdateOperationsInput | $Enums.TipoManutencao
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type ManutencaoUncheckedUpdateManyWithoutAtivoInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: EnumTipoManutencaoFieldUpdateOperationsInput | $Enums.TipoManutencao
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type FalhaUpdateWithoutAtivoInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    data_ocorrencia?: DateTimeFieldUpdateOperationsInput | Date | string
    criticidade?: EnumCriticidadeFieldUpdateOperationsInput | $Enums.Criticidade
  }

  export type FalhaUncheckedUpdateWithoutAtivoInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    data_ocorrencia?: DateTimeFieldUpdateOperationsInput | Date | string
    criticidade?: EnumCriticidadeFieldUpdateOperationsInput | $Enums.Criticidade
  }

  export type FalhaUncheckedUpdateManyWithoutAtivoInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    data_ocorrencia?: DateTimeFieldUpdateOperationsInput | Date | string
    criticidade?: EnumCriticidadeFieldUpdateOperationsInput | $Enums.Criticidade
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}