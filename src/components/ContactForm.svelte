<script>
  import Input from "./Input.svelte";
  import Textarea from "./Textarea.svelte";
  import Button from "./Button.svelte";

  export let eMailErrorMsg;
  export let eMailLabel;
  export let eMailValidationRegexp;
  export let messageErrorMsg;
  export let messageLabel;
  export let messageValidationRegexp;
  export let nameErrorMsg;
  export let nameLabel;
  export let nameValidationRegexp;
  export let submitLabel;

  const regexp = {
    email: new RegExp(eMailValidationRegexp),
    message: new RegExp(messageValidationRegexp),
    name: new RegExp(nameValidationRegexp)
  };

  const form = {
    email: { valid: false, length: 0 },
    message: { valid: false, length: 0 },
    name: { valid: false, length: 0 }
  };

  function validateField(e) {
    const field = e.currentTarget;
    form[field.name] = {
      valid: field.value.match(regexp[field.name]) ? true : false,
      length: field.value.length
    };
  }
</script>

<style>
  form {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
  }

  label {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .submit {
    text-align: right;
  }

  .error {
    color: #f00;
    font-size: var(--font-smallest);
  }
</style>

<form
  name="contact"
  method="POST"
  data-netlify="true"
  data-netlify-honeypot="bot-field"
  action="/success">
  <input type="hidden" name="bot-field" />
  <input type="hidden" name="form-name" value="contact" />
  <label>
    <span>{nameLabel}:</span>
    <Input
      name="name"
      type="text"
      on:keyup={validateField}
      on:blur={validateField} />
  </label>
  {#if !form.name.valid && form.name.length > 0}
    <span class="error">{nameErrorMsg}</span>
  {/if}
  <label>
    <span>{eMailLabel}:</span>
    <Input
      name="email"
      type="email"
      on:keyup={validateField}
      on:blur={validateField} />
  </label>
  {#if !form.email.valid && form.email.length > 0}
    <span class="error">{eMailErrorMsg}</span>
  {/if}
  <label>
    <span>{messageLabel}:</span>
    <Textarea name="message" on:keyup={validateField} on:blur={validateField} />
  </label>
  {#if !form.message.valid && form.message.length > 0}
    <span class="error">{messageErrorMsg}</span>
  {/if}
  <div class="submit">
    <Button
      disabled={!(form.email.valid && form.message.valid && form.name.valid)}>
      {submitLabel}
    </Button>
  </div>
</form>
