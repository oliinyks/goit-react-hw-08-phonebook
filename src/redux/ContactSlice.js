import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  tagTypes: ['contact'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6363c1b38a3337d9a2e6d982.mockapi.io/contacts/',
  }),
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => 'contacts',
      providesTags: ['Contact'],
    }),
    createContact: builder.mutation({
      query: body => ({
        url: 'contacts',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Contact'],
    }),
    deleteContact: builder.mutation({
      query: contactId => ({
        url: `contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useCreateContactMutation,
  useDeleteContactMutation,
} = contactsApi;
