<template>
    <form @submit.prevent="onSubmit">
        <div class="row mt-8">
            <div class="bg-white rounded-lg py-4">
                <div class="container mx-auto px-8">
                    <div class="row">
                        <label for="total" class="flex items-end">
                            <div class="w-10 text-right leading-10 mr-4 pb-1">
                                <span
                                    class="inline-block px-1 text-dark border border-dark rounded text-sm font-bold"
                                    >USD</span
                                >
                            </div>
                            <div
                                class="flex flex-col border-b border-gray-100 pb-1"
                            >
                                <span class="font-semibold text-xs text-dark"
                                    >Total</span
                                >
                                <input
                                    placeholder="0"
                                    type="number"
                                    class="text-4xl text-dark w-full outline-none mt-1"
                                    id="total"
                                    v-model="transaction.total"
                                />
                            </div>
                        </label>
                    </div>

                    <div class="row">
                        <label for="category" class="flex">
                            <div
                                class="flex items-center w-10 text-right leading-10 mr-4"
                            >
                                <span
                                    class="inline-block ml-auto w-8 h-8 rounded-full bg-blue-300"
                                ></span>
                            </div>
                            <div class="flex-1 border-b border-gray-100 py-3">
                                <input
                                    placeholder="Select a category"
                                    type="text"
                                    class="text-xl text-dark w-full outline-none"
                                    id="category"
                                    v-model="transaction.category"
                                />
                            </div>
                        </label>
                    </div>

                    <div class="row">
                        <label for="note" class="flex">
                            <div
                                class="flex items-center w-10 text-right leading-10 mr-4"
                            >
                                <span class="inline-block ml-auto">
                                    <font-awesome-icon
                                        icon="fa-solid fa-note-sticky"
                                        class="text-lg"
                                /></span>
                            </div>
                            <div class="flex-1 border-b border-gray-100 py-3">
                                <input
                                    placeholder="Note"
                                    type="text"
                                    class="text-dark w-full outline-none"
                                    id="note"
                                    v-model="transaction.note"
                                />
                            </div>
                        </label>
                    </div>

                    <div class="row">
                        <label for="time" class="flex">
                            <div
                                class="flex items-center w-10 text-right leading-10 mr-4"
                            >
                                <span class="inline-block ml-auto">
                                    <font-awesome-icon
                                        icon="fa-solid fa-calendar-days"
                                        class="text-lg"
                                /></span>
                            </div>
                            <div class="flex-1 border-b border-gray-100 py-3">
                                <input
                                    class="text-dark w-full outline-none"
                                    type="date"
                                    id="time"
                                    placeholder="Select time"
                                    v-model="transaction.time"
                                />
                            </div>
                        </label>
                    </div>

                    <div class="row">
                        <label for="wallet" class="flex">
                            <div
                                class="flex items-center w-10 text-right leading-10 mr-4"
                            >
                                <span class="inline-block ml-auto">
                                    <font-awesome-icon
                                        icon="fa-solid fa-wallet"
                                        class="text-lg"
                                /></span>
                            </div>
                            <div class="flex-1 py-3">
                                <div class="text-dark w-full">My Wallet</div>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </div>

        <template v-if="showDetails">
            <div class="row mt-8">
                <div class="bg-white rounded-lg py-4">
                    <div class="container mx-auto px-8">
                        <div class="row">
                            <label for="location" class="flex">
                                <div
                                    class="flex items-center w-10 text-right leading-10 mr-4"
                                >
                                    <span class="inline-block ml-auto">
                                        <font-awesome-icon
                                            icon="fa-solid fa-location-dot"
                                            class="text-lg"
                                    /></span>
                                </div>
                                <div
                                    class="flex-1 border-b border-gray-100 py-3"
                                >
                                    <input
                                        placeholder="Select a location"
                                        type="text"
                                        class="text-dark w-full outline-none"
                                        id="location"
                                        v-model="transaction.location"
                                    />
                                </div>
                            </label>
                        </div>

                        <div class="row">
                            <label for="withPerson" class="flex">
                                <div
                                    class="flex items-center w-10 text-right leading-10 mr-4"
                                >
                                    <span class="inline-block ml-auto">
                                        <font-awesome-icon
                                            icon="fa-solid fa-user-group"
                                            class="text-lg"
                                    /></span>
                                </div>
                                <div class="flex-1 py-3">
                                    <input
                                        placeholder="With person"
                                        type="text"
                                        class="text-dark w-full outline-none"
                                        id="withPerson"
                                        v-model="transaction.withPerson"
                                    />
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row mt-8">
                <div class="bg-white rounded-lg py-4">
                    <div class="container mx-auto px-8">
                        <div class="row">
                            <label for="photo" class="flex text-primary">
                                <div
                                    class="flex items-center w-10 text-right leading-10 mr-4"
                                >
                                    <span class="inline-block ml-auto">
                                        <font-awesome-icon
                                            icon="fa-solid fa-camera"
                                            class="text-lg"
                                    /></span>
                                </div>
                                <div class="flex-1 py-2">
                                    <div
                                        class="w-full font-semibold cursor-pointer"
                                    >
                                        Upload photo
                                    </div>
                                    <input
                                        id="photo"
                                        type="file"
                                        class="hidden"
                                        @change="onFileChange"
                                        accept="image/*"
                                    />
                                    <div
                                        v-if="uploadedPhoto.previewUrl"
                                        class="w-20 h-20"
                                    >
                                        <img
                                            class="w-full h-auto object-cover"
                                            alt="uploaded-photo"
                                            :src="uploadedPhoto.previewUrl"
                                        />
                                    </div>
                                    <div
                                        v-if="uploadedPhoto.error"
                                        class="text-red text-sm"
                                    >
                                        {{ uploadedPhoto.error }}
                                    </div>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </template>

        <div v-else class="row mt-8">
            <button
                type="button"
                class="bg-white rounded-lg w-full text-primary font-semibold py-3"
                @click="() => (showDetails = true)"
            >
                More Details
            </button>
        </div>

        <button type="submit" class="bg-primary text-white">Submit</button>
    </form>
</template>

<script>
import useCollection from '@/composables/useCollection';
import { useUser } from '@/composables/useUser';
import { ACCEPTED_UPLOAD_FILE_TYPE, COLLECTIONS } from '@/utils/constants';
import { reactive, ref } from 'vue';
import useStorage from '@/composables/useStorage';

export default {
    setup() {
        const { getUser } = useUser();
        const { error: transactionError, addRecord: addTransaction } =
            useCollection(COLLECTIONS.transactions);
        const { error: uploadFileError, uploadFile } = useStorage(
            COLLECTIONS.transactions
        );
        const showDetails = ref(false);
        const transaction = reactive({
            total: 0,
            category: '',
            note: '',
            location: '',
            time: new Date().toISOString().slice(0, 10),
            withPerson: '',
        });
        const uploadedPhoto = reactive({
            file: null,
            previewUrl: null,
            error: null,
        });

        const onFileChange = (event) => {
            const { files } = event.target;
            const [selectedFile] = files;

            if (!selectedFile) return;

            if (ACCEPTED_UPLOAD_FILE_TYPE.includes(selectedFile.type)) {
                uploadedPhoto.file = selectedFile;
                uploadedPhoto.previewUrl = URL.createObjectURL(selectedFile);
                uploadedPhoto.error = null;
            } else {
                uploadedPhoto.photo = null;
                uploadedPhoto.previewUrl = null;
                uploadedPhoto.error =
                    'Uploaded file is not a valid image. Only JPG, PNG and GIF files are allowed.';
            }
        };

        const onSubmit = async () => {
            const { user } = getUser();

            const uploadFileResponse = await uploadFile(uploadedPhoto.file);

            await addTransaction({
                ...transaction,
                userId: user.value.uid,
                photo: uploadFileResponse.ref.fullPath,
            });
        };

        return {
            onSubmit,
            showDetails,
            transaction,
            transactionError,
            onFileChange,
            uploadedPhoto,
            uploadFileError,
        };
    },
};
</script>
