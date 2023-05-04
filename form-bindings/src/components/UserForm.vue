<template>
    <div class="form">
        <h3>Sign up</h3>
        <div class="desc">It's quick and easy ❤️</div>
        <div class="spacer"></div>

        <!-- name -->
        <div class="form-group">
            <label for="name" class="form-label label-required">Name</label>
            <input
                id="name"
                type="text"
                placeholder="Enter name"
                autocomplete="off"
                class="form-control"
                v-model="user.name"
            />
            <span class="form-message">{{ error.name }}</span>
        </div>

        <!-- gender -->
        <div class="form-group">
            <label for="gender" class="form-label label-required">Gender</label>
            <div class="form-wrap">
                <div class="form-item">
                    <input
                        id="male"
                        type="radio"
                        value="Male"
                        v-model="user.gender"
                    />
                    <label for="male">Male</label>
                </div>
                <div class="form-item">
                    <input
                        id="female"
                        type="radio"
                        value="Female"
                        v-model="user.gender"
                    />
                    <label for="female">Female</label>
                </div>
            </div>
        </div>

        <!-- dob -->
        <div class="form-group">
            <label for="dob" class="form-label label-required"
                >Date of Birth</label
            >
            <input
                id="dob"
                type="date"
                name="date"
                class="form-control"
                v-model="user.dob"
            />
            <span class="form-message">{{ error.dob }}</span>
        </div>

        <!-- phone -->
        <div class="form-group">
            <label for="phone" class="form-label label-required"
                >Phone number</label
            >
            <input
                id="phone"
                type="text"
                name="phone"
                placeholder="Enter phone number"
                autocomplete="off"
                class="form-control"
                v-model="user.phone"
            />
            <span class="form-message">{{ error.phone }}</span>
        </div>

        <!-- email -->
        <div class="form-group">
            <label for="email" class="form-label label-required">Email</label>
            <input
                id="email"
                type="text"
                name="email"
                placeholder="Enter email"
                autocomplete="off"
                class="form-control"
                v-model="user.email"
            />
            <span class="form-message">{{ error.email }}</span>
        </div>

        <!-- address -->
        <div class="form-group">
            <label for="address" class="form-label label-required"
                >Address</label
            >
            <select id="address" class="form-control" v-model="user.address">
                <option value="">-- Address --</option>
                <option value="Hà Nội">Hà Nội</option>
                <option value="Hà Đông">Hà Đông</option>
                <option value="Hà Tây">Hà Tây</option>
                <option value="Hà Nam">Hà Nam</option>
                <option value="Hà Bắc">Hà Bắc</option>
            </select>
            <span class="form-message">{{ error.address }}</span>
        </div>

        <!-- description -->
        <div class="form-group">
            <label for="description" class="form-label">Description</label>
            <textarea
                id="description"
                rows="8"
                v-model="user.description"
            ></textarea>
            <span class="form-message">{{ error.description }}</span>
        </div>

        <!-- courses -->
        <div class="form-group">
            <label for="courses" class="form-label">Courses</label>
            <div class="form-wrap">
                <div class="form-item">
                    <input
                        id="HTML"
                        type="checkbox"
                        name="level"
                        value="HTML"
                        v-model="user.courses"
                    />
                    <label for="HTML">HTML</label>
                </div>
                <div class="form-item">
                    <input
                        id="CSS"
                        type="checkbox"
                        name="level"
                        value="CSS"
                        v-model="user.courses"
                    />
                    <label for="CSS">CSS</label>
                </div>
                <div class="form-item">
                    <input
                        id="JS"
                        type="checkbox"
                        name="level"
                        value="JS"
                        v-model="user.courses"
                    />
                    <label for="JS">JS</label>
                </div>
            </div>
        </div>

        <!-- buttons -->
        <div class="group-btn">
            <button
                class="btn"
                :class="user.id ? 'btn btn-inactive' : 'btn btn-active'"
                @click="onSubmit"
            >
                Submit
            </button>
            <button
                class="btn"
                :class="user.id ? 'btn btn-active' : 'btn btn-inactive'"
                @click="onUpdate"
            >
                Update
            </button>
        </div>
    </div>
</template>

<script>
import { Rules, defaultUser, validate } from "@/utils/helpers";

export default {
    data() {
        return {
            user: { ...defaultUser },
            error: {
                name: "",
                dob: "",
                phone: "",
                email: "",
                address: "",
                description: "",
            },
        };
    },

    methods: {
        validateForm() {
            return validate(this.user, [
                Rules.isRequired("name", "Vui lòng nhập tên"),
                Rules.minLength("name", 6),
                Rules.isRequired("dob", "Vui lòng nhập ngày sinh"),
                Rules.isDate("dob"),
                Rules.isRequired("phone", "Vui lòng nhập số điện thoại"),
                Rules.isPhoneNumber("phone"),
                Rules.isRequired("email", "Vui lòng nhập email"),
                Rules.isEmail("email"),
                Rules.isRequired("address", "Vui lòng chọn địa chỉ"),
            ]);
        },
        onSubmit() {
            this.error = this.validateForm();

            if (Object.values(this.error).some((err) => err)) return;
            this.$emit("onAdd", this.user);
            this.user = { ...defaultUser };
        },
        onUpdate() {
            this.error = this.validateForm();

            if (Object.values(this.error).some((err) => err)) return;
            this.$emit("onUpdate", this.user);
            this.user = { ...defaultUser };
        },
    },
};
</script>
