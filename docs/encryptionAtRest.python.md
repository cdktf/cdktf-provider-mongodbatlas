# `mongodbatlas_encryption_at_rest`

Refer to the Terraform Registory for docs: [`mongodbatlas_encryption_at_rest`](https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest).

# `encryptionAtRest` Submodule <a name="`encryptionAtRest` Submodule" id="@cdktf/provider-mongodbatlas.encryptionAtRest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EncryptionAtRest <a name="EncryptionAtRest" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest mongodbatlas_encryption_at_rest}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import encryption_at_rest

encryptionAtRest.EncryptionAtRest(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  project_id: str,
  aws_kms: typing.Mapping[str] = None,
  aws_kms_config: EncryptionAtRestAwsKmsConfig = None,
  azure_key_vault: typing.Mapping[str] = None,
  azure_key_vault_config: EncryptionAtRestAzureKeyVaultConfig = None,
  google_cloud_kms: typing.Mapping[str] = None,
  google_cloud_kms_config: EncryptionAtRestGoogleCloudKmsConfig = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest#project_id EncryptionAtRest#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.Initializer.parameter.awsKms">aws_kms</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest#aws_kms EncryptionAtRest#aws_kms}. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.Initializer.parameter.awsKmsConfig">aws_kms_config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfig">EncryptionAtRestAwsKmsConfig</a></code> | aws_kms_config block. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.Initializer.parameter.azureKeyVault">azure_key_vault</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest#azure_key_vault EncryptionAtRest#azure_key_vault}. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.Initializer.parameter.azureKeyVaultConfig">azure_key_vault_config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig">EncryptionAtRestAzureKeyVaultConfig</a></code> | azure_key_vault_config block. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.Initializer.parameter.googleCloudKms">google_cloud_kms</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest#google_cloud_kms EncryptionAtRest#google_cloud_kms}. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.Initializer.parameter.googleCloudKmsConfig">google_cloud_kms_config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfig">EncryptionAtRestGoogleCloudKmsConfig</a></code> | google_cloud_kms_config block. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest#id EncryptionAtRest#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.Initializer.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest#project_id EncryptionAtRest#project_id}.

---

##### `aws_kms`<sup>Optional</sup> <a name="aws_kms" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.Initializer.parameter.awsKms"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest#aws_kms EncryptionAtRest#aws_kms}.

---

##### `aws_kms_config`<sup>Optional</sup> <a name="aws_kms_config" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.Initializer.parameter.awsKmsConfig"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfig">EncryptionAtRestAwsKmsConfig</a>

aws_kms_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest#aws_kms_config EncryptionAtRest#aws_kms_config}

---

##### `azure_key_vault`<sup>Optional</sup> <a name="azure_key_vault" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.Initializer.parameter.azureKeyVault"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest#azure_key_vault EncryptionAtRest#azure_key_vault}.

---

##### `azure_key_vault_config`<sup>Optional</sup> <a name="azure_key_vault_config" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.Initializer.parameter.azureKeyVaultConfig"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig">EncryptionAtRestAzureKeyVaultConfig</a>

azure_key_vault_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest#azure_key_vault_config EncryptionAtRest#azure_key_vault_config}

---

##### `google_cloud_kms`<sup>Optional</sup> <a name="google_cloud_kms" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.Initializer.parameter.googleCloudKms"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest#google_cloud_kms EncryptionAtRest#google_cloud_kms}.

---

##### `google_cloud_kms_config`<sup>Optional</sup> <a name="google_cloud_kms_config" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.Initializer.parameter.googleCloudKmsConfig"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfig">EncryptionAtRestGoogleCloudKmsConfig</a>

google_cloud_kms_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest#google_cloud_kms_config EncryptionAtRest#google_cloud_kms_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest#id EncryptionAtRest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.putAwsKmsConfig">put_aws_kms_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.putAzureKeyVaultConfig">put_azure_key_vault_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.putGoogleCloudKmsConfig">put_google_cloud_kms_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.resetAwsKms">reset_aws_kms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.resetAwsKmsConfig">reset_aws_kms_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.resetAzureKeyVault">reset_azure_key_vault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.resetAzureKeyVaultConfig">reset_azure_key_vault_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.resetGoogleCloudKms">reset_google_cloud_kms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.resetGoogleCloudKmsConfig">reset_google_cloud_kms_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_aws_kms_config` <a name="put_aws_kms_config" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.putAwsKmsConfig"></a>

```python
def put_aws_kms_config(
  access_key_id: str = None,
  customer_master_key_id: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  region: str = None,
  role_id: str = None,
  secret_access_key: str = None
) -> None
```

###### `access_key_id`<sup>Optional</sup> <a name="access_key_id" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.putAwsKmsConfig.parameter.accessKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest#access_key_id EncryptionAtRest#access_key_id}.

---

###### `customer_master_key_id`<sup>Optional</sup> <a name="customer_master_key_id" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.putAwsKmsConfig.parameter.customerMasterKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest#customer_master_key_id EncryptionAtRest#customer_master_key_id}.

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.putAwsKmsConfig.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest#enabled EncryptionAtRest#enabled}.

---

###### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.putAwsKmsConfig.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest#region EncryptionAtRest#region}.

---

###### `role_id`<sup>Optional</sup> <a name="role_id" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.putAwsKmsConfig.parameter.roleId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest#role_id EncryptionAtRest#role_id}.

---

###### `secret_access_key`<sup>Optional</sup> <a name="secret_access_key" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.putAwsKmsConfig.parameter.secretAccessKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest#secret_access_key EncryptionAtRest#secret_access_key}.

---

##### `put_azure_key_vault_config` <a name="put_azure_key_vault_config" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.putAzureKeyVaultConfig"></a>

```python
def put_azure_key_vault_config(
  enabled: typing.Union[bool, IResolvable],
  azure_environment: str = None,
  client_id: str = None,
  key_identifier: str = None,
  key_vault_name: str = None,
  resource_group_name: str = None,
  secret: str = None,
  subscription_id: str = None,
  tenant_id: str = None
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.putAzureKeyVaultConfig.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest#enabled EncryptionAtRest#enabled}.

---

###### `azure_environment`<sup>Optional</sup> <a name="azure_environment" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.putAzureKeyVaultConfig.parameter.azureEnvironment"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest#azure_environment EncryptionAtRest#azure_environment}.

---

###### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.putAzureKeyVaultConfig.parameter.clientId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest#client_id EncryptionAtRest#client_id}.

---

###### `key_identifier`<sup>Optional</sup> <a name="key_identifier" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.putAzureKeyVaultConfig.parameter.keyIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest#key_identifier EncryptionAtRest#key_identifier}.

---

###### `key_vault_name`<sup>Optional</sup> <a name="key_vault_name" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.putAzureKeyVaultConfig.parameter.keyVaultName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest#key_vault_name EncryptionAtRest#key_vault_name}.

---

###### `resource_group_name`<sup>Optional</sup> <a name="resource_group_name" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.putAzureKeyVaultConfig.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest#resource_group_name EncryptionAtRest#resource_group_name}.

---

###### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.putAzureKeyVaultConfig.parameter.secret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest#secret EncryptionAtRest#secret}.

---

###### `subscription_id`<sup>Optional</sup> <a name="subscription_id" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.putAzureKeyVaultConfig.parameter.subscriptionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest#subscription_id EncryptionAtRest#subscription_id}.

---

###### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.putAzureKeyVaultConfig.parameter.tenantId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest#tenant_id EncryptionAtRest#tenant_id}.

---

##### `put_google_cloud_kms_config` <a name="put_google_cloud_kms_config" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.putGoogleCloudKmsConfig"></a>

```python
def put_google_cloud_kms_config(
  enabled: typing.Union[bool, IResolvable] = None,
  key_version_resource_id: str = None,
  service_account_key: str = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.putGoogleCloudKmsConfig.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest#enabled EncryptionAtRest#enabled}.

---

###### `key_version_resource_id`<sup>Optional</sup> <a name="key_version_resource_id" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.putGoogleCloudKmsConfig.parameter.keyVersionResourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest#key_version_resource_id EncryptionAtRest#key_version_resource_id}.

---

###### `service_account_key`<sup>Optional</sup> <a name="service_account_key" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.putGoogleCloudKmsConfig.parameter.serviceAccountKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest#service_account_key EncryptionAtRest#service_account_key}.

---

##### `reset_aws_kms` <a name="reset_aws_kms" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.resetAwsKms"></a>

```python
def reset_aws_kms() -> None
```

##### `reset_aws_kms_config` <a name="reset_aws_kms_config" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.resetAwsKmsConfig"></a>

```python
def reset_aws_kms_config() -> None
```

##### `reset_azure_key_vault` <a name="reset_azure_key_vault" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.resetAzureKeyVault"></a>

```python
def reset_azure_key_vault() -> None
```

##### `reset_azure_key_vault_config` <a name="reset_azure_key_vault_config" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.resetAzureKeyVaultConfig"></a>

```python
def reset_azure_key_vault_config() -> None
```

##### `reset_google_cloud_kms` <a name="reset_google_cloud_kms" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.resetGoogleCloudKms"></a>

```python
def reset_google_cloud_kms() -> None
```

##### `reset_google_cloud_kms_config` <a name="reset_google_cloud_kms_config" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.resetGoogleCloudKmsConfig"></a>

```python
def reset_google_cloud_kms_config() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.isConstruct"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import encryption_at_rest

encryptionAtRest.EncryptionAtRest.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import encryption_at_rest

encryptionAtRest.EncryptionAtRest.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import encryption_at_rest

encryptionAtRest.EncryptionAtRest.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.awsKmsConfig">aws_kms_config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference">EncryptionAtRestAwsKmsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.azureKeyVaultConfig">azure_key_vault_config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference">EncryptionAtRestAzureKeyVaultConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.googleCloudKmsConfig">google_cloud_kms_config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference">EncryptionAtRestGoogleCloudKmsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.awsKmsConfigInput">aws_kms_config_input</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfig">EncryptionAtRestAwsKmsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.awsKmsInput">aws_kms_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.azureKeyVaultConfigInput">azure_key_vault_config_input</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig">EncryptionAtRestAzureKeyVaultConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.azureKeyVaultInput">azure_key_vault_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.googleCloudKmsConfigInput">google_cloud_kms_config_input</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfig">EncryptionAtRestGoogleCloudKmsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.googleCloudKmsInput">google_cloud_kms_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.awsKms">aws_kms</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.azureKeyVault">azure_key_vault</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.googleCloudKms">google_cloud_kms</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `aws_kms_config`<sup>Required</sup> <a name="aws_kms_config" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.awsKmsConfig"></a>

```python
aws_kms_config: EncryptionAtRestAwsKmsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference">EncryptionAtRestAwsKmsConfigOutputReference</a>

---

##### `azure_key_vault_config`<sup>Required</sup> <a name="azure_key_vault_config" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.azureKeyVaultConfig"></a>

```python
azure_key_vault_config: EncryptionAtRestAzureKeyVaultConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference">EncryptionAtRestAzureKeyVaultConfigOutputReference</a>

---

##### `google_cloud_kms_config`<sup>Required</sup> <a name="google_cloud_kms_config" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.googleCloudKmsConfig"></a>

```python
google_cloud_kms_config: EncryptionAtRestGoogleCloudKmsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference">EncryptionAtRestGoogleCloudKmsConfigOutputReference</a>

---

##### `aws_kms_config_input`<sup>Optional</sup> <a name="aws_kms_config_input" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.awsKmsConfigInput"></a>

```python
aws_kms_config_input: EncryptionAtRestAwsKmsConfig
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfig">EncryptionAtRestAwsKmsConfig</a>

---

##### `aws_kms_input`<sup>Optional</sup> <a name="aws_kms_input" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.awsKmsInput"></a>

```python
aws_kms_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `azure_key_vault_config_input`<sup>Optional</sup> <a name="azure_key_vault_config_input" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.azureKeyVaultConfigInput"></a>

```python
azure_key_vault_config_input: EncryptionAtRestAzureKeyVaultConfig
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig">EncryptionAtRestAzureKeyVaultConfig</a>

---

##### `azure_key_vault_input`<sup>Optional</sup> <a name="azure_key_vault_input" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.azureKeyVaultInput"></a>

```python
azure_key_vault_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `google_cloud_kms_config_input`<sup>Optional</sup> <a name="google_cloud_kms_config_input" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.googleCloudKmsConfigInput"></a>

```python
google_cloud_kms_config_input: EncryptionAtRestGoogleCloudKmsConfig
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfig">EncryptionAtRestGoogleCloudKmsConfig</a>

---

##### `google_cloud_kms_input`<sup>Optional</sup> <a name="google_cloud_kms_input" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.googleCloudKmsInput"></a>

```python
google_cloud_kms_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `aws_kms`<sup>Required</sup> <a name="aws_kms" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.awsKms"></a>

```python
aws_kms: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `azure_key_vault`<sup>Required</sup> <a name="azure_key_vault" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.azureKeyVault"></a>

```python
azure_key_vault: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `google_cloud_kms`<sup>Required</sup> <a name="google_cloud_kms" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.googleCloudKms"></a>

```python
google_cloud_kms: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EncryptionAtRestAwsKmsConfig <a name="EncryptionAtRestAwsKmsConfig" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import encryption_at_rest

encryptionAtRest.EncryptionAtRestAwsKmsConfig(
  access_key_id: str = None,
  customer_master_key_id: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  region: str = None,
  role_id: str = None,
  secret_access_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfig.property.accessKeyId">access_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest#access_key_id EncryptionAtRest#access_key_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfig.property.customerMasterKeyId">customer_master_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest#customer_master_key_id EncryptionAtRest#customer_master_key_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest#enabled EncryptionAtRest#enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfig.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest#region EncryptionAtRest#region}. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfig.property.roleId">role_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest#role_id EncryptionAtRest#role_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfig.property.secretAccessKey">secret_access_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest#secret_access_key EncryptionAtRest#secret_access_key}. |

---

##### `access_key_id`<sup>Optional</sup> <a name="access_key_id" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfig.property.accessKeyId"></a>

```python
access_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest#access_key_id EncryptionAtRest#access_key_id}.

---

##### `customer_master_key_id`<sup>Optional</sup> <a name="customer_master_key_id" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfig.property.customerMasterKeyId"></a>

```python
customer_master_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest#customer_master_key_id EncryptionAtRest#customer_master_key_id}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest#enabled EncryptionAtRest#enabled}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest#region EncryptionAtRest#region}.

---

##### `role_id`<sup>Optional</sup> <a name="role_id" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfig.property.roleId"></a>

```python
role_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest#role_id EncryptionAtRest#role_id}.

---

##### `secret_access_key`<sup>Optional</sup> <a name="secret_access_key" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfig.property.secretAccessKey"></a>

```python
secret_access_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest#secret_access_key EncryptionAtRest#secret_access_key}.

---

### EncryptionAtRestAzureKeyVaultConfig <a name="EncryptionAtRestAzureKeyVaultConfig" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import encryption_at_rest

encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig(
  enabled: typing.Union[bool, IResolvable],
  azure_environment: str = None,
  client_id: str = None,
  key_identifier: str = None,
  key_vault_name: str = None,
  resource_group_name: str = None,
  secret: str = None,
  subscription_id: str = None,
  tenant_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest#enabled EncryptionAtRest#enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig.property.azureEnvironment">azure_environment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest#azure_environment EncryptionAtRest#azure_environment}. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig.property.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest#client_id EncryptionAtRest#client_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig.property.keyIdentifier">key_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest#key_identifier EncryptionAtRest#key_identifier}. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig.property.keyVaultName">key_vault_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest#key_vault_name EncryptionAtRest#key_vault_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest#resource_group_name EncryptionAtRest#resource_group_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig.property.secret">secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest#secret EncryptionAtRest#secret}. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig.property.subscriptionId">subscription_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest#subscription_id EncryptionAtRest#subscription_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig.property.tenantId">tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest#tenant_id EncryptionAtRest#tenant_id}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest#enabled EncryptionAtRest#enabled}.

---

##### `azure_environment`<sup>Optional</sup> <a name="azure_environment" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig.property.azureEnvironment"></a>

```python
azure_environment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest#azure_environment EncryptionAtRest#azure_environment}.

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest#client_id EncryptionAtRest#client_id}.

---

##### `key_identifier`<sup>Optional</sup> <a name="key_identifier" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig.property.keyIdentifier"></a>

```python
key_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest#key_identifier EncryptionAtRest#key_identifier}.

---

##### `key_vault_name`<sup>Optional</sup> <a name="key_vault_name" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig.property.keyVaultName"></a>

```python
key_vault_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest#key_vault_name EncryptionAtRest#key_vault_name}.

---

##### `resource_group_name`<sup>Optional</sup> <a name="resource_group_name" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest#resource_group_name EncryptionAtRest#resource_group_name}.

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig.property.secret"></a>

```python
secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest#secret EncryptionAtRest#secret}.

---

##### `subscription_id`<sup>Optional</sup> <a name="subscription_id" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest#subscription_id EncryptionAtRest#subscription_id}.

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest#tenant_id EncryptionAtRest#tenant_id}.

---

### EncryptionAtRestConfig <a name="EncryptionAtRestConfig" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import encryption_at_rest

encryptionAtRest.EncryptionAtRestConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  project_id: str,
  aws_kms: typing.Mapping[str] = None,
  aws_kms_config: EncryptionAtRestAwsKmsConfig = None,
  azure_key_vault: typing.Mapping[str] = None,
  azure_key_vault_config: EncryptionAtRestAzureKeyVaultConfig = None,
  google_cloud_kms: typing.Mapping[str] = None,
  google_cloud_kms_config: EncryptionAtRestGoogleCloudKmsConfig = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest#project_id EncryptionAtRest#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.awsKms">aws_kms</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest#aws_kms EncryptionAtRest#aws_kms}. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.awsKmsConfig">aws_kms_config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfig">EncryptionAtRestAwsKmsConfig</a></code> | aws_kms_config block. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.azureKeyVault">azure_key_vault</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest#azure_key_vault EncryptionAtRest#azure_key_vault}. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.azureKeyVaultConfig">azure_key_vault_config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig">EncryptionAtRestAzureKeyVaultConfig</a></code> | azure_key_vault_config block. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.googleCloudKms">google_cloud_kms</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest#google_cloud_kms EncryptionAtRest#google_cloud_kms}. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.googleCloudKmsConfig">google_cloud_kms_config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfig">EncryptionAtRestGoogleCloudKmsConfig</a></code> | google_cloud_kms_config block. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest#id EncryptionAtRest#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest#project_id EncryptionAtRest#project_id}.

---

##### `aws_kms`<sup>Optional</sup> <a name="aws_kms" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.awsKms"></a>

```python
aws_kms: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest#aws_kms EncryptionAtRest#aws_kms}.

---

##### `aws_kms_config`<sup>Optional</sup> <a name="aws_kms_config" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.awsKmsConfig"></a>

```python
aws_kms_config: EncryptionAtRestAwsKmsConfig
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfig">EncryptionAtRestAwsKmsConfig</a>

aws_kms_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest#aws_kms_config EncryptionAtRest#aws_kms_config}

---

##### `azure_key_vault`<sup>Optional</sup> <a name="azure_key_vault" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.azureKeyVault"></a>

```python
azure_key_vault: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest#azure_key_vault EncryptionAtRest#azure_key_vault}.

---

##### `azure_key_vault_config`<sup>Optional</sup> <a name="azure_key_vault_config" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.azureKeyVaultConfig"></a>

```python
azure_key_vault_config: EncryptionAtRestAzureKeyVaultConfig
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig">EncryptionAtRestAzureKeyVaultConfig</a>

azure_key_vault_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest#azure_key_vault_config EncryptionAtRest#azure_key_vault_config}

---

##### `google_cloud_kms`<sup>Optional</sup> <a name="google_cloud_kms" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.googleCloudKms"></a>

```python
google_cloud_kms: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest#google_cloud_kms EncryptionAtRest#google_cloud_kms}.

---

##### `google_cloud_kms_config`<sup>Optional</sup> <a name="google_cloud_kms_config" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.googleCloudKmsConfig"></a>

```python
google_cloud_kms_config: EncryptionAtRestGoogleCloudKmsConfig
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfig">EncryptionAtRestGoogleCloudKmsConfig</a>

google_cloud_kms_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest#google_cloud_kms_config EncryptionAtRest#google_cloud_kms_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest#id EncryptionAtRest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### EncryptionAtRestGoogleCloudKmsConfig <a name="EncryptionAtRestGoogleCloudKmsConfig" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import encryption_at_rest

encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfig(
  enabled: typing.Union[bool, IResolvable] = None,
  key_version_resource_id: str = None,
  service_account_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest#enabled EncryptionAtRest#enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfig.property.keyVersionResourceId">key_version_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest#key_version_resource_id EncryptionAtRest#key_version_resource_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfig.property.serviceAccountKey">service_account_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest#service_account_key EncryptionAtRest#service_account_key}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest#enabled EncryptionAtRest#enabled}.

---

##### `key_version_resource_id`<sup>Optional</sup> <a name="key_version_resource_id" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfig.property.keyVersionResourceId"></a>

```python
key_version_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest#key_version_resource_id EncryptionAtRest#key_version_resource_id}.

---

##### `service_account_key`<sup>Optional</sup> <a name="service_account_key" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfig.property.serviceAccountKey"></a>

```python
service_account_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/resources/encryption_at_rest#service_account_key EncryptionAtRest#service_account_key}.

---

## Classes <a name="Classes" id="Classes"></a>

### EncryptionAtRestAwsKmsConfigOutputReference <a name="EncryptionAtRestAwsKmsConfigOutputReference" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import encryption_at_rest

encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.resetAccessKeyId">reset_access_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.resetCustomerMasterKeyId">reset_customer_master_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.resetRoleId">reset_role_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.resetSecretAccessKey">reset_secret_access_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_access_key_id` <a name="reset_access_key_id" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.resetAccessKeyId"></a>

```python
def reset_access_key_id() -> None
```

##### `reset_customer_master_key_id` <a name="reset_customer_master_key_id" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.resetCustomerMasterKeyId"></a>

```python
def reset_customer_master_key_id() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_role_id` <a name="reset_role_id" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.resetRoleId"></a>

```python
def reset_role_id() -> None
```

##### `reset_secret_access_key` <a name="reset_secret_access_key" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.resetSecretAccessKey"></a>

```python
def reset_secret_access_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.accessKeyIdInput">access_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.customerMasterKeyIdInput">customer_master_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.roleIdInput">role_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.secretAccessKeyInput">secret_access_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.accessKeyId">access_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.customerMasterKeyId">customer_master_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.roleId">role_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.secretAccessKey">secret_access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfig">EncryptionAtRestAwsKmsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_key_id_input`<sup>Optional</sup> <a name="access_key_id_input" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.accessKeyIdInput"></a>

```python
access_key_id_input: str
```

- *Type:* str

---

##### `customer_master_key_id_input`<sup>Optional</sup> <a name="customer_master_key_id_input" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.customerMasterKeyIdInput"></a>

```python
customer_master_key_id_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `role_id_input`<sup>Optional</sup> <a name="role_id_input" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.roleIdInput"></a>

```python
role_id_input: str
```

- *Type:* str

---

##### `secret_access_key_input`<sup>Optional</sup> <a name="secret_access_key_input" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.secretAccessKeyInput"></a>

```python
secret_access_key_input: str
```

- *Type:* str

---

##### `access_key_id`<sup>Required</sup> <a name="access_key_id" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.accessKeyId"></a>

```python
access_key_id: str
```

- *Type:* str

---

##### `customer_master_key_id`<sup>Required</sup> <a name="customer_master_key_id" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.customerMasterKeyId"></a>

```python
customer_master_key_id: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `role_id`<sup>Required</sup> <a name="role_id" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.roleId"></a>

```python
role_id: str
```

- *Type:* str

---

##### `secret_access_key`<sup>Required</sup> <a name="secret_access_key" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.secretAccessKey"></a>

```python
secret_access_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.internalValue"></a>

```python
internal_value: EncryptionAtRestAwsKmsConfig
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfig">EncryptionAtRestAwsKmsConfig</a>

---


### EncryptionAtRestAzureKeyVaultConfigOutputReference <a name="EncryptionAtRestAzureKeyVaultConfigOutputReference" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import encryption_at_rest

encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.resetAzureEnvironment">reset_azure_environment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.resetClientId">reset_client_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.resetKeyIdentifier">reset_key_identifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.resetKeyVaultName">reset_key_vault_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.resetResourceGroupName">reset_resource_group_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.resetSecret">reset_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.resetSubscriptionId">reset_subscription_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.resetTenantId">reset_tenant_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_azure_environment` <a name="reset_azure_environment" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.resetAzureEnvironment"></a>

```python
def reset_azure_environment() -> None
```

##### `reset_client_id` <a name="reset_client_id" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.resetClientId"></a>

```python
def reset_client_id() -> None
```

##### `reset_key_identifier` <a name="reset_key_identifier" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.resetKeyIdentifier"></a>

```python
def reset_key_identifier() -> None
```

##### `reset_key_vault_name` <a name="reset_key_vault_name" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.resetKeyVaultName"></a>

```python
def reset_key_vault_name() -> None
```

##### `reset_resource_group_name` <a name="reset_resource_group_name" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.resetResourceGroupName"></a>

```python
def reset_resource_group_name() -> None
```

##### `reset_secret` <a name="reset_secret" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.resetSecret"></a>

```python
def reset_secret() -> None
```

##### `reset_subscription_id` <a name="reset_subscription_id" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.resetSubscriptionId"></a>

```python
def reset_subscription_id() -> None
```

##### `reset_tenant_id` <a name="reset_tenant_id" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.resetTenantId"></a>

```python
def reset_tenant_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.azureEnvironmentInput">azure_environment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.keyIdentifierInput">key_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.keyVaultNameInput">key_vault_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.secretInput">secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.subscriptionIdInput">subscription_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.tenantIdInput">tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.azureEnvironment">azure_environment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.keyIdentifier">key_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.keyVaultName">key_vault_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.secret">secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.subscriptionId">subscription_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig">EncryptionAtRestAzureKeyVaultConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `azure_environment_input`<sup>Optional</sup> <a name="azure_environment_input" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.azureEnvironmentInput"></a>

```python
azure_environment_input: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key_identifier_input`<sup>Optional</sup> <a name="key_identifier_input" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.keyIdentifierInput"></a>

```python
key_identifier_input: str
```

- *Type:* str

---

##### `key_vault_name_input`<sup>Optional</sup> <a name="key_vault_name_input" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.keyVaultNameInput"></a>

```python
key_vault_name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `secret_input`<sup>Optional</sup> <a name="secret_input" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.secretInput"></a>

```python
secret_input: str
```

- *Type:* str

---

##### `subscription_id_input`<sup>Optional</sup> <a name="subscription_id_input" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.subscriptionIdInput"></a>

```python
subscription_id_input: str
```

- *Type:* str

---

##### `tenant_id_input`<sup>Optional</sup> <a name="tenant_id_input" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.tenantIdInput"></a>

```python
tenant_id_input: str
```

- *Type:* str

---

##### `azure_environment`<sup>Required</sup> <a name="azure_environment" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.azureEnvironment"></a>

```python
azure_environment: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key_identifier`<sup>Required</sup> <a name="key_identifier" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.keyIdentifier"></a>

```python
key_identifier: str
```

- *Type:* str

---

##### `key_vault_name`<sup>Required</sup> <a name="key_vault_name" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.keyVaultName"></a>

```python
key_vault_name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.secret"></a>

```python
secret: str
```

- *Type:* str

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.internalValue"></a>

```python
internal_value: EncryptionAtRestAzureKeyVaultConfig
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig">EncryptionAtRestAzureKeyVaultConfig</a>

---


### EncryptionAtRestGoogleCloudKmsConfigOutputReference <a name="EncryptionAtRestGoogleCloudKmsConfigOutputReference" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import encryption_at_rest

encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.resetKeyVersionResourceId">reset_key_version_resource_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.resetServiceAccountKey">reset_service_account_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_key_version_resource_id` <a name="reset_key_version_resource_id" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.resetKeyVersionResourceId"></a>

```python
def reset_key_version_resource_id() -> None
```

##### `reset_service_account_key` <a name="reset_service_account_key" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.resetServiceAccountKey"></a>

```python
def reset_service_account_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.property.keyVersionResourceIdInput">key_version_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.property.serviceAccountKeyInput">service_account_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.property.keyVersionResourceId">key_version_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.property.serviceAccountKey">service_account_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfig">EncryptionAtRestGoogleCloudKmsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key_version_resource_id_input`<sup>Optional</sup> <a name="key_version_resource_id_input" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.property.keyVersionResourceIdInput"></a>

```python
key_version_resource_id_input: str
```

- *Type:* str

---

##### `service_account_key_input`<sup>Optional</sup> <a name="service_account_key_input" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.property.serviceAccountKeyInput"></a>

```python
service_account_key_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key_version_resource_id`<sup>Required</sup> <a name="key_version_resource_id" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.property.keyVersionResourceId"></a>

```python
key_version_resource_id: str
```

- *Type:* str

---

##### `service_account_key`<sup>Required</sup> <a name="service_account_key" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.property.serviceAccountKey"></a>

```python
service_account_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.property.internalValue"></a>

```python
internal_value: EncryptionAtRestGoogleCloudKmsConfig
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfig">EncryptionAtRestGoogleCloudKmsConfig</a>

---



