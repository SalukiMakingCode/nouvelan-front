import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type AuthenticationDto = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  askRecoveryPasswordCode: Scalars['Boolean']['output'];
  recoverPassword: UserRecoveryPassword;
  register: User;
  saveUser: User;
  setCurrentScoreByActivity: Array<Score>;
};


export type MutationAskRecoveryPasswordCodeArgs = {
  email: Scalars['String']['input'];
};


export type MutationRecoverPasswordArgs = {
  dto: RecoverPasswordDto;
};


export type MutationRegisterArgs = {
  dto: SaveUserDto;
};


export type MutationSaveUserArgs = {
  dto: SaveUserDto;
};


export type MutationSetCurrentScoreByActivityArgs = {
  dto: Array<SetCurrentScoreByActivityDto>;
};

export type Photo = {
  __typename?: 'Photo';
  comment: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  link: Scalars['String']['output'];
  user: User;
  year: Year;
};

export type Query = {
  __typename?: 'Query';
  getAllPhotos: Array<Photo>;
  getAllScores: Array<Score>;
  getAllScoresCurrent: Array<Score>;
  getAllUser: Array<User>;
  getAllUserParticipate: Array<User>;
  getAllYears: Array<Year>;
  getLoggedUser: User;
  login: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
  validateRecoveryPasswordCode: UserRecoveryPassword;
  validateToken: Scalars['Boolean']['output'];
};


export type QueryLoginArgs = {
  dto: AuthenticationDto;
};


export type QueryValidateRecoveryPasswordCodeArgs = {
  dto: ValidateRecoveryPasswordCodeDto;
};


export type QueryValidateTokenArgs = {
  dto: TokenValidationDto;
};

export type RecoverPasswordDto = {
  code: Scalars['Float']['input'];
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type SaveUserDto = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  login: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Score = {
  __typename?: 'Score';
  aperitif: Scalars['Int']['output'];
  dessert: Scalars['Int']['output'];
  entreeChaude: Scalars['Int']['output'];
  entreeFroide: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  plat: Scalars['Int']['output'];
  sorbet: Scalars['Int']['output'];
  soupe: Scalars['Int']['output'];
  user: User;
  year: Year;
};

export type SetCurrentScoreByActivityDto = {
  aperitif?: InputMaybe<Scalars['Int']['input']>;
  dessert?: InputMaybe<Scalars['Int']['input']>;
  entreeChaude?: InputMaybe<Scalars['Int']['input']>;
  entreeFroide?: InputMaybe<Scalars['Int']['input']>;
  plat?: InputMaybe<Scalars['Int']['input']>;
  sorbet?: InputMaybe<Scalars['Int']['input']>;
  soupe?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
  yearId: Scalars['Int']['input'];
};

export type TokenValidationDto = {
  token: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  isParticipatingThisYear: Scalars['Boolean']['output'];
  lastName: Scalars['String']['output'];
  login: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type UserRecoveryPassword = {
  __typename?: 'UserRecoveryPassword';
  code: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  usedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ValidateRecoveryPasswordCodeDto = {
  code: Scalars['Float']['input'];
  email: Scalars['String']['input'];
};

export type Year = {
  __typename?: 'Year';
  current: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
  year: Scalars['String']['output'];
};

export type LoginQueryVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginQuery = { __typename?: 'Query', login: string };

export type ValidateTokenQueryVariables = Exact<{
  token: Scalars['String']['input'];
}>;


export type ValidateTokenQuery = { __typename?: 'Query', validateToken: boolean };

export type GetAllPhotoQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPhotoQuery = { __typename?: 'Query', getAllPhotos: Array<{ __typename?: 'Photo', id: number, comment: string, link: string, user: { __typename?: 'User', id: number, firstName: string, lastName: string }, year: { __typename?: 'Year', id: number, year: string } }> };

export type GetAllScoresCurrentQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllScoresCurrentQuery = { __typename?: 'Query', getAllScoresCurrent: Array<{ __typename?: 'Score', id: number, aperitif: number, dessert: number, entreeChaude: number, entreeFroide: number, plat: number, sorbet: number, soupe: number, user: { __typename?: 'User', id: number, firstName: string }, year: { __typename?: 'Year', id: number, year: string } }> };

export type SetCurrentScoreByActivityMutationVariables = Exact<{
  dto: Array<SetCurrentScoreByActivityDto> | SetCurrentScoreByActivityDto;
}>;


export type SetCurrentScoreByActivityMutation = { __typename?: 'Mutation', setCurrentScoreByActivity: Array<{ __typename?: 'Score', id: number, aperitif: number, entreeFroide: number, soupe: number, entreeChaude: number, sorbet: number, plat: number, dessert: number, user: { __typename?: 'User', id: number, firstName: string }, year: { __typename?: 'Year', id: number, year: string } }> };

export type GetAllUserParticipateQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUserParticipateQuery = { __typename?: 'Query', getAllUserParticipate: Array<{ __typename?: 'User', id: number, email: string, firstName: string, lastName: string, isParticipatingThisYear: boolean }> };

export type GetAllUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUserQuery = { __typename?: 'Query', getAllUser: Array<{ __typename?: 'User', id: number, email: string, firstName: string, lastName: string }> };

export type GetLoggedUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLoggedUserQuery = { __typename?: 'Query', getLoggedUser: { __typename?: 'User', id: number, email: string } };


export const LoginDocument = gql`
    query login($email: String!, $password: String!) {
  login(dto: {email: $email, password: $password})
}
    `;

/**
 * __useLoginQuery__
 *
 * To run a query within a React component, call `useLoginQuery` and pass it any options that fit your needs.
 * When your component renders, `useLoginQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLoginQuery({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginQuery(baseOptions: Apollo.QueryHookOptions<LoginQuery, LoginQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LoginQuery, LoginQueryVariables>(LoginDocument, options);
      }
export function useLoginLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LoginQuery, LoginQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LoginQuery, LoginQueryVariables>(LoginDocument, options);
        }
export function useLoginSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<LoginQuery, LoginQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<LoginQuery, LoginQueryVariables>(LoginDocument, options);
        }
export type LoginQueryHookResult = ReturnType<typeof useLoginQuery>;
export type LoginLazyQueryHookResult = ReturnType<typeof useLoginLazyQuery>;
export type LoginSuspenseQueryHookResult = ReturnType<typeof useLoginSuspenseQuery>;
export type LoginQueryResult = Apollo.QueryResult<LoginQuery, LoginQueryVariables>;
export const ValidateTokenDocument = gql`
    query validateToken($token: String!) {
  validateToken(dto: {token: $token})
}
    `;

/**
 * __useValidateTokenQuery__
 *
 * To run a query within a React component, call `useValidateTokenQuery` and pass it any options that fit your needs.
 * When your component renders, `useValidateTokenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useValidateTokenQuery({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useValidateTokenQuery(baseOptions: Apollo.QueryHookOptions<ValidateTokenQuery, ValidateTokenQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ValidateTokenQuery, ValidateTokenQueryVariables>(ValidateTokenDocument, options);
      }
export function useValidateTokenLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ValidateTokenQuery, ValidateTokenQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ValidateTokenQuery, ValidateTokenQueryVariables>(ValidateTokenDocument, options);
        }
export function useValidateTokenSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ValidateTokenQuery, ValidateTokenQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ValidateTokenQuery, ValidateTokenQueryVariables>(ValidateTokenDocument, options);
        }
export type ValidateTokenQueryHookResult = ReturnType<typeof useValidateTokenQuery>;
export type ValidateTokenLazyQueryHookResult = ReturnType<typeof useValidateTokenLazyQuery>;
export type ValidateTokenSuspenseQueryHookResult = ReturnType<typeof useValidateTokenSuspenseQuery>;
export type ValidateTokenQueryResult = Apollo.QueryResult<ValidateTokenQuery, ValidateTokenQueryVariables>;
export const GetAllPhotoDocument = gql`
    query GetAllPhoto {
  getAllPhotos {
    id
    comment
    link
    user {
      id
      firstName
      lastName
    }
    year {
      id
      year
    }
  }
}
    `;

/**
 * __useGetAllPhotoQuery__
 *
 * To run a query within a React component, call `useGetAllPhotoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPhotoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPhotoQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllPhotoQuery(baseOptions?: Apollo.QueryHookOptions<GetAllPhotoQuery, GetAllPhotoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllPhotoQuery, GetAllPhotoQueryVariables>(GetAllPhotoDocument, options);
      }
export function useGetAllPhotoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllPhotoQuery, GetAllPhotoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllPhotoQuery, GetAllPhotoQueryVariables>(GetAllPhotoDocument, options);
        }
export function useGetAllPhotoSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllPhotoQuery, GetAllPhotoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllPhotoQuery, GetAllPhotoQueryVariables>(GetAllPhotoDocument, options);
        }
export type GetAllPhotoQueryHookResult = ReturnType<typeof useGetAllPhotoQuery>;
export type GetAllPhotoLazyQueryHookResult = ReturnType<typeof useGetAllPhotoLazyQuery>;
export type GetAllPhotoSuspenseQueryHookResult = ReturnType<typeof useGetAllPhotoSuspenseQuery>;
export type GetAllPhotoQueryResult = Apollo.QueryResult<GetAllPhotoQuery, GetAllPhotoQueryVariables>;
export const GetAllScoresCurrentDocument = gql`
    query GetAllScoresCurrent {
  getAllScoresCurrent {
    id
    user {
      id
      firstName
    }
    year {
      id
      year
    }
    aperitif
    dessert
    entreeChaude
    entreeFroide
    plat
    sorbet
    soupe
  }
}
    `;

/**
 * __useGetAllScoresCurrentQuery__
 *
 * To run a query within a React component, call `useGetAllScoresCurrentQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllScoresCurrentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllScoresCurrentQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllScoresCurrentQuery(baseOptions?: Apollo.QueryHookOptions<GetAllScoresCurrentQuery, GetAllScoresCurrentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllScoresCurrentQuery, GetAllScoresCurrentQueryVariables>(GetAllScoresCurrentDocument, options);
      }
export function useGetAllScoresCurrentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllScoresCurrentQuery, GetAllScoresCurrentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllScoresCurrentQuery, GetAllScoresCurrentQueryVariables>(GetAllScoresCurrentDocument, options);
        }
export function useGetAllScoresCurrentSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllScoresCurrentQuery, GetAllScoresCurrentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllScoresCurrentQuery, GetAllScoresCurrentQueryVariables>(GetAllScoresCurrentDocument, options);
        }
export type GetAllScoresCurrentQueryHookResult = ReturnType<typeof useGetAllScoresCurrentQuery>;
export type GetAllScoresCurrentLazyQueryHookResult = ReturnType<typeof useGetAllScoresCurrentLazyQuery>;
export type GetAllScoresCurrentSuspenseQueryHookResult = ReturnType<typeof useGetAllScoresCurrentSuspenseQuery>;
export type GetAllScoresCurrentQueryResult = Apollo.QueryResult<GetAllScoresCurrentQuery, GetAllScoresCurrentQueryVariables>;
export const SetCurrentScoreByActivityDocument = gql`
    mutation SetCurrentScoreByActivity($dto: [SetCurrentScoreByActivityDto!]!) {
  setCurrentScoreByActivity(dto: $dto) {
    id
    user {
      id
      firstName
    }
    year {
      id
      year
    }
    aperitif
    entreeFroide
    soupe
    entreeChaude
    sorbet
    plat
    dessert
  }
}
    `;
export type SetCurrentScoreByActivityMutationFn = Apollo.MutationFunction<SetCurrentScoreByActivityMutation, SetCurrentScoreByActivityMutationVariables>;

/**
 * __useSetCurrentScoreByActivityMutation__
 *
 * To run a mutation, you first call `useSetCurrentScoreByActivityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetCurrentScoreByActivityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setCurrentScoreByActivityMutation, { data, loading, error }] = useSetCurrentScoreByActivityMutation({
 *   variables: {
 *      dto: // value for 'dto'
 *   },
 * });
 */
export function useSetCurrentScoreByActivityMutation(baseOptions?: Apollo.MutationHookOptions<SetCurrentScoreByActivityMutation, SetCurrentScoreByActivityMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SetCurrentScoreByActivityMutation, SetCurrentScoreByActivityMutationVariables>(SetCurrentScoreByActivityDocument, options);
      }
export type SetCurrentScoreByActivityMutationHookResult = ReturnType<typeof useSetCurrentScoreByActivityMutation>;
export type SetCurrentScoreByActivityMutationResult = Apollo.MutationResult<SetCurrentScoreByActivityMutation>;
export type SetCurrentScoreByActivityMutationOptions = Apollo.BaseMutationOptions<SetCurrentScoreByActivityMutation, SetCurrentScoreByActivityMutationVariables>;
export const GetAllUserParticipateDocument = gql`
    query GetAllUserParticipate {
  getAllUserParticipate {
    id
    email
    firstName
    lastName
    isParticipatingThisYear
  }
}
    `;

/**
 * __useGetAllUserParticipateQuery__
 *
 * To run a query within a React component, call `useGetAllUserParticipateQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUserParticipateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUserParticipateQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllUserParticipateQuery(baseOptions?: Apollo.QueryHookOptions<GetAllUserParticipateQuery, GetAllUserParticipateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllUserParticipateQuery, GetAllUserParticipateQueryVariables>(GetAllUserParticipateDocument, options);
      }
export function useGetAllUserParticipateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllUserParticipateQuery, GetAllUserParticipateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllUserParticipateQuery, GetAllUserParticipateQueryVariables>(GetAllUserParticipateDocument, options);
        }
export function useGetAllUserParticipateSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllUserParticipateQuery, GetAllUserParticipateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllUserParticipateQuery, GetAllUserParticipateQueryVariables>(GetAllUserParticipateDocument, options);
        }
export type GetAllUserParticipateQueryHookResult = ReturnType<typeof useGetAllUserParticipateQuery>;
export type GetAllUserParticipateLazyQueryHookResult = ReturnType<typeof useGetAllUserParticipateLazyQuery>;
export type GetAllUserParticipateSuspenseQueryHookResult = ReturnType<typeof useGetAllUserParticipateSuspenseQuery>;
export type GetAllUserParticipateQueryResult = Apollo.QueryResult<GetAllUserParticipateQuery, GetAllUserParticipateQueryVariables>;
export const GetAllUserDocument = gql`
    query GetAllUser {
  getAllUser {
    id
    email
    firstName
    lastName
  }
}
    `;

/**
 * __useGetAllUserQuery__
 *
 * To run a query within a React component, call `useGetAllUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllUserQuery(baseOptions?: Apollo.QueryHookOptions<GetAllUserQuery, GetAllUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllUserQuery, GetAllUserQueryVariables>(GetAllUserDocument, options);
      }
export function useGetAllUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllUserQuery, GetAllUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllUserQuery, GetAllUserQueryVariables>(GetAllUserDocument, options);
        }
export function useGetAllUserSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllUserQuery, GetAllUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllUserQuery, GetAllUserQueryVariables>(GetAllUserDocument, options);
        }
export type GetAllUserQueryHookResult = ReturnType<typeof useGetAllUserQuery>;
export type GetAllUserLazyQueryHookResult = ReturnType<typeof useGetAllUserLazyQuery>;
export type GetAllUserSuspenseQueryHookResult = ReturnType<typeof useGetAllUserSuspenseQuery>;
export type GetAllUserQueryResult = Apollo.QueryResult<GetAllUserQuery, GetAllUserQueryVariables>;
export const GetLoggedUserDocument = gql`
    query GetLoggedUser {
  getLoggedUser {
    id
    email
  }
}
    `;

/**
 * __useGetLoggedUserQuery__
 *
 * To run a query within a React component, call `useGetLoggedUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLoggedUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLoggedUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetLoggedUserQuery(baseOptions?: Apollo.QueryHookOptions<GetLoggedUserQuery, GetLoggedUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLoggedUserQuery, GetLoggedUserQueryVariables>(GetLoggedUserDocument, options);
      }
export function useGetLoggedUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLoggedUserQuery, GetLoggedUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLoggedUserQuery, GetLoggedUserQueryVariables>(GetLoggedUserDocument, options);
        }
export function useGetLoggedUserSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetLoggedUserQuery, GetLoggedUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetLoggedUserQuery, GetLoggedUserQueryVariables>(GetLoggedUserDocument, options);
        }
export type GetLoggedUserQueryHookResult = ReturnType<typeof useGetLoggedUserQuery>;
export type GetLoggedUserLazyQueryHookResult = ReturnType<typeof useGetLoggedUserLazyQuery>;
export type GetLoggedUserSuspenseQueryHookResult = ReturnType<typeof useGetLoggedUserSuspenseQuery>;
export type GetLoggedUserQueryResult = Apollo.QueryResult<GetLoggedUserQuery, GetLoggedUserQueryVariables>;
export const namedOperations = {
  Query: {
    login: 'login',
    validateToken: 'validateToken',
    GetAllPhoto: 'GetAllPhoto',
    GetAllScoresCurrent: 'GetAllScoresCurrent',
    GetAllUserParticipate: 'GetAllUserParticipate',
    GetAllUser: 'GetAllUser',
    GetLoggedUser: 'GetLoggedUser'
  },
  Mutation: {
    SetCurrentScoreByActivity: 'SetCurrentScoreByActivity'
  }
}