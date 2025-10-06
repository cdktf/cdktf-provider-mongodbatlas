# `encryptionAtRest` Submodule <a name="`encryptionAtRest` Submodule" id="@cdktf/provider-mongodbatlas.encryptionAtRest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EncryptionAtRest <a name="EncryptionAtRest" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/encryption_at_rest mongodbatlas_encryption_at_rest}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import encryption_at_rest

encryptionAtRest.EncryptionAtRest(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  project_id: str,
  aws_kms_config: IResolvable | typing.List[EncryptionAtRestAwsKmsConfig] = None,
  azure_key_vault_config: IResolvable | typing.List[EncryptionAtRestAzureKeyVaultConfig] = None,
  enabled_for_search_nodes: bool | IResolvable = None,
  google_cloud_kms_config: IResolvable | typing.List[EncryptionAtRestGoogleCloudKmsConfig] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Unique 24-hexadecimal digit string that identifies your project. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.Initializer.parameter.awsKmsConfig">aws_kms_config</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfig">EncryptionAtRestAwsKmsConfig</a>]</code> | aws_kms_config block. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.Initializer.parameter.azureKeyVaultConfig">azure_key_vault_config</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig">EncryptionAtRestAzureKeyVaultConfig</a>]</code> | azure_key_vault_config block. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.Initializer.parameter.enabledForSearchNodes">enabled_for_search_nodes</a></code> | <code>bool \| cdktf.IResolvable</code> | Flag that indicates whether Encryption at Rest for Dedicated Search Nodes is enabled in the specified project. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.Initializer.parameter.googleCloudKmsConfig">google_cloud_kms_config</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfig">EncryptionAtRestGoogleCloudKmsConfig</a>]</code> | google_cloud_kms_config block. |

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

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

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

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.Initializer.parameter.projectId"></a>

- *Type:* str

Unique 24-hexadecimal digit string that identifies your project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/encryption_at_rest#project_id EncryptionAtRest#project_id}

---

##### `aws_kms_config`<sup>Optional</sup> <a name="aws_kms_config" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.Initializer.parameter.awsKmsConfig"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfig">EncryptionAtRestAwsKmsConfig</a>]

aws_kms_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/encryption_at_rest#aws_kms_config EncryptionAtRest#aws_kms_config}

---

##### `azure_key_vault_config`<sup>Optional</sup> <a name="azure_key_vault_config" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.Initializer.parameter.azureKeyVaultConfig"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig">EncryptionAtRestAzureKeyVaultConfig</a>]

azure_key_vault_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/encryption_at_rest#azure_key_vault_config EncryptionAtRest#azure_key_vault_config}

---

##### `enabled_for_search_nodes`<sup>Optional</sup> <a name="enabled_for_search_nodes" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.Initializer.parameter.enabledForSearchNodes"></a>

- *Type:* bool | cdktf.IResolvable

Flag that indicates whether Encryption at Rest for Dedicated Search Nodes is enabled in the specified project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/encryption_at_rest#enabled_for_search_nodes EncryptionAtRest#enabled_for_search_nodes}

---

##### `google_cloud_kms_config`<sup>Optional</sup> <a name="google_cloud_kms_config" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.Initializer.parameter.googleCloudKmsConfig"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfig">EncryptionAtRestGoogleCloudKmsConfig</a>]

google_cloud_kms_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/encryption_at_rest#google_cloud_kms_config EncryptionAtRest#google_cloud_kms_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.putAwsKmsConfig">put_aws_kms_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.putAzureKeyVaultConfig">put_azure_key_vault_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.putGoogleCloudKmsConfig">put_google_cloud_kms_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.resetAwsKmsConfig">reset_aws_kms_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.resetAzureKeyVaultConfig">reset_azure_key_vault_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.resetEnabledForSearchNodes">reset_enabled_for_search_nodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.resetGoogleCloudKmsConfig">reset_google_cloud_kms_config</a></code> | *No description.* |

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

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

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

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

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

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_aws_kms_config` <a name="put_aws_kms_config" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.putAwsKmsConfig"></a>

```python
def put_aws_kms_config(
  value: IResolvable | typing.List[EncryptionAtRestAwsKmsConfig]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.putAwsKmsConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfig">EncryptionAtRestAwsKmsConfig</a>]

---

##### `put_azure_key_vault_config` <a name="put_azure_key_vault_config" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.putAzureKeyVaultConfig"></a>

```python
def put_azure_key_vault_config(
  value: IResolvable | typing.List[EncryptionAtRestAzureKeyVaultConfig]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.putAzureKeyVaultConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig">EncryptionAtRestAzureKeyVaultConfig</a>]

---

##### `put_google_cloud_kms_config` <a name="put_google_cloud_kms_config" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.putGoogleCloudKmsConfig"></a>

```python
def put_google_cloud_kms_config(
  value: IResolvable | typing.List[EncryptionAtRestGoogleCloudKmsConfig]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.putGoogleCloudKmsConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfig">EncryptionAtRestGoogleCloudKmsConfig</a>]

---

##### `reset_aws_kms_config` <a name="reset_aws_kms_config" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.resetAwsKmsConfig"></a>

```python
def reset_aws_kms_config() -> None
```

##### `reset_azure_key_vault_config` <a name="reset_azure_key_vault_config" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.resetAzureKeyVaultConfig"></a>

```python
def reset_azure_key_vault_config() -> None
```

##### `reset_enabled_for_search_nodes` <a name="reset_enabled_for_search_nodes" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.resetEnabledForSearchNodes"></a>

```python
def reset_enabled_for_search_nodes() -> None
```

##### `reset_google_cloud_kms_config` <a name="reset_google_cloud_kms_config" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.resetGoogleCloudKmsConfig"></a>

```python
def reset_google_cloud_kms_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a EncryptionAtRest resource upon running "cdktf plan <stack-name>". |

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

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import encryption_at_rest

encryptionAtRest.EncryptionAtRest.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a EncryptionAtRest resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the EncryptionAtRest to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing EncryptionAtRest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/encryption_at_rest#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the EncryptionAtRest to import is found.

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
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.awsKmsConfig">aws_kms_config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList">EncryptionAtRestAwsKmsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.azureKeyVaultConfig">azure_key_vault_config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList">EncryptionAtRestAzureKeyVaultConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.googleCloudKmsConfig">google_cloud_kms_config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList">EncryptionAtRestGoogleCloudKmsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.awsKmsConfigInput">aws_kms_config_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfig">EncryptionAtRestAwsKmsConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.azureKeyVaultConfigInput">azure_key_vault_config_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig">EncryptionAtRestAzureKeyVaultConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.enabledForSearchNodesInput">enabled_for_search_nodes_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.googleCloudKmsConfigInput">google_cloud_kms_config_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfig">EncryptionAtRestGoogleCloudKmsConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.enabledForSearchNodes">enabled_for_search_nodes</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
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
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

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
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `aws_kms_config`<sup>Required</sup> <a name="aws_kms_config" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.awsKmsConfig"></a>

```python
aws_kms_config: EncryptionAtRestAwsKmsConfigList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList">EncryptionAtRestAwsKmsConfigList</a>

---

##### `azure_key_vault_config`<sup>Required</sup> <a name="azure_key_vault_config" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.azureKeyVaultConfig"></a>

```python
azure_key_vault_config: EncryptionAtRestAzureKeyVaultConfigList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList">EncryptionAtRestAzureKeyVaultConfigList</a>

---

##### `google_cloud_kms_config`<sup>Required</sup> <a name="google_cloud_kms_config" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.googleCloudKmsConfig"></a>

```python
google_cloud_kms_config: EncryptionAtRestGoogleCloudKmsConfigList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList">EncryptionAtRestGoogleCloudKmsConfigList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `aws_kms_config_input`<sup>Optional</sup> <a name="aws_kms_config_input" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.awsKmsConfigInput"></a>

```python
aws_kms_config_input: IResolvable | typing.List[EncryptionAtRestAwsKmsConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfig">EncryptionAtRestAwsKmsConfig</a>]

---

##### `azure_key_vault_config_input`<sup>Optional</sup> <a name="azure_key_vault_config_input" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.azureKeyVaultConfigInput"></a>

```python
azure_key_vault_config_input: IResolvable | typing.List[EncryptionAtRestAzureKeyVaultConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig">EncryptionAtRestAzureKeyVaultConfig</a>]

---

##### `enabled_for_search_nodes_input`<sup>Optional</sup> <a name="enabled_for_search_nodes_input" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.enabledForSearchNodesInput"></a>

```python
enabled_for_search_nodes_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `google_cloud_kms_config_input`<sup>Optional</sup> <a name="google_cloud_kms_config_input" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.googleCloudKmsConfigInput"></a>

```python
google_cloud_kms_config_input: IResolvable | typing.List[EncryptionAtRestGoogleCloudKmsConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfig">EncryptionAtRestGoogleCloudKmsConfig</a>]

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `enabled_for_search_nodes`<sup>Required</sup> <a name="enabled_for_search_nodes" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.enabledForSearchNodes"></a>

```python
enabled_for_search_nodes: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

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
  enabled: bool | IResolvable = None,
  region: str = None,
  require_private_networking: bool | IResolvable = None,
  role_id: str = None,
  secret_access_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfig.property.accessKeyId">access_key_id</a></code> | <code>str</code> | Unique alphanumeric string that identifies an Identity and Access Management (IAM) access key with permissions required to access your Amazon Web Services (AWS) Customer Master Key (CMK). |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfig.property.customerMasterKeyId">customer_master_key_id</a></code> | <code>str</code> | Unique alphanumeric string that identifies the Amazon Web Services (AWS) Customer Master Key (CMK) you used to encrypt and decrypt the MongoDB master keys. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfig.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Flag that indicates whether someone enabled encryption at rest for the specified project through Amazon Web Services (AWS) Key Management Service (KMS). |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfig.property.region">region</a></code> | <code>str</code> | Physical location where MongoDB Atlas deploys your AWS-hosted MongoDB cluster nodes. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfig.property.requirePrivateNetworking">require_private_networking</a></code> | <code>bool \| cdktf.IResolvable</code> | Enable connection to your Amazon Web Services (AWS) Key Management Service (KMS) over private networking. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfig.property.roleId">role_id</a></code> | <code>str</code> | Unique 24-hexadecimal digit string that identifies an Amazon Web Services (AWS) Identity and Access Management (IAM) role. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfig.property.secretAccessKey">secret_access_key</a></code> | <code>str</code> | Human-readable label of the Identity and Access Management (IAM) secret access key with permissions required to access your Amazon Web Services (AWS) customer master key. |

---

##### `access_key_id`<sup>Optional</sup> <a name="access_key_id" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfig.property.accessKeyId"></a>

```python
access_key_id: str
```

- *Type:* str

Unique alphanumeric string that identifies an Identity and Access Management (IAM) access key with permissions required to access your Amazon Web Services (AWS) Customer Master Key (CMK).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/encryption_at_rest#access_key_id EncryptionAtRest#access_key_id}

---

##### `customer_master_key_id`<sup>Optional</sup> <a name="customer_master_key_id" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfig.property.customerMasterKeyId"></a>

```python
customer_master_key_id: str
```

- *Type:* str

Unique alphanumeric string that identifies the Amazon Web Services (AWS) Customer Master Key (CMK) you used to encrypt and decrypt the MongoDB master keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/encryption_at_rest#customer_master_key_id EncryptionAtRest#customer_master_key_id}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfig.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Flag that indicates whether someone enabled encryption at rest for the specified project through Amazon Web Services (AWS) Key Management Service (KMS).

To disable encryption at rest using customer key management and remove the configuration details, pass only this parameter with a value of `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/encryption_at_rest#enabled EncryptionAtRest#enabled}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Physical location where MongoDB Atlas deploys your AWS-hosted MongoDB cluster nodes.

The region you choose can affect network latency for clients accessing your databases. When MongoDB Cloud deploys a dedicated cluster, it checks if a VPC or VPC connection exists for that provider and region. If not, MongoDB Atlas creates them as part of the deployment. MongoDB Atlas assigns the VPC a CIDR block. To limit a new VPC peering connection to one CIDR block and region, create the connection first. Deploy the cluster after the connection starts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/encryption_at_rest#region EncryptionAtRest#region}

---

##### `require_private_networking`<sup>Optional</sup> <a name="require_private_networking" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfig.property.requirePrivateNetworking"></a>

```python
require_private_networking: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Enable connection to your Amazon Web Services (AWS) Key Management Service (KMS) over private networking.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/encryption_at_rest#require_private_networking EncryptionAtRest#require_private_networking}

---

##### `role_id`<sup>Optional</sup> <a name="role_id" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfig.property.roleId"></a>

```python
role_id: str
```

- *Type:* str

Unique 24-hexadecimal digit string that identifies an Amazon Web Services (AWS) Identity and Access Management (IAM) role.

This IAM role has the permissions required to manage your AWS customer master key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/encryption_at_rest#role_id EncryptionAtRest#role_id}

---

##### `secret_access_key`<sup>Optional</sup> <a name="secret_access_key" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfig.property.secretAccessKey"></a>

```python
secret_access_key: str
```

- *Type:* str

Human-readable label of the Identity and Access Management (IAM) secret access key with permissions required to access your Amazon Web Services (AWS) customer master key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/encryption_at_rest#secret_access_key EncryptionAtRest#secret_access_key}

---

### EncryptionAtRestAzureKeyVaultConfig <a name="EncryptionAtRestAzureKeyVaultConfig" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import encryption_at_rest

encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig(
  azure_environment: str = None,
  client_id: str = None,
  enabled: bool | IResolvable = None,
  key_identifier: str = None,
  key_vault_name: str = None,
  require_private_networking: bool | IResolvable = None,
  resource_group_name: str = None,
  secret: str = None,
  subscription_id: str = None,
  tenant_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig.property.azureEnvironment">azure_environment</a></code> | <code>str</code> | Azure environment in which your account credentials reside. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig.property.clientId">client_id</a></code> | <code>str</code> | Unique 36-hexadecimal character string that identifies an Azure application associated with your Azure Active Directory tenant. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Flag that indicates whether someone enabled encryption at rest for the specified  project. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig.property.keyIdentifier">key_identifier</a></code> | <code>str</code> | Web address with a unique key that identifies for your Azure Key Vault. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig.property.keyVaultName">key_vault_name</a></code> | <code>str</code> | Unique string that identifies the Azure Key Vault that contains your key. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig.property.requirePrivateNetworking">require_private_networking</a></code> | <code>bool \| cdktf.IResolvable</code> | Enable connection to your Azure Key Vault over private networking. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Name of the Azure resource group that contains your Azure Key Vault. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig.property.secret">secret</a></code> | <code>str</code> | Private data that you need secured and that belongs to the specified Azure Key Vault (AKV) tenant (**azureKeyVault.tenantID**). This data can include any type of sensitive data such as passwords, database connection strings, API keys, and the like. AKV stores this information as encrypted binary data. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig.property.subscriptionId">subscription_id</a></code> | <code>str</code> | Unique 36-hexadecimal character string that identifies your Azure subscription. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig.property.tenantId">tenant_id</a></code> | <code>str</code> | Unique 36-hexadecimal character string that identifies the Azure Active Directory tenant within your Azure subscription. |

---

##### `azure_environment`<sup>Optional</sup> <a name="azure_environment" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig.property.azureEnvironment"></a>

```python
azure_environment: str
```

- *Type:* str

Azure environment in which your account credentials reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/encryption_at_rest#azure_environment EncryptionAtRest#azure_environment}

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Unique 36-hexadecimal character string that identifies an Azure application associated with your Azure Active Directory tenant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/encryption_at_rest#client_id EncryptionAtRest#client_id}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Flag that indicates whether someone enabled encryption at rest for the specified  project.

To disable encryption at rest using customer key management and remove the configuration details, pass only this parameter with a value of `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/encryption_at_rest#enabled EncryptionAtRest#enabled}

---

##### `key_identifier`<sup>Optional</sup> <a name="key_identifier" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig.property.keyIdentifier"></a>

```python
key_identifier: str
```

- *Type:* str

Web address with a unique key that identifies for your Azure Key Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/encryption_at_rest#key_identifier EncryptionAtRest#key_identifier}

---

##### `key_vault_name`<sup>Optional</sup> <a name="key_vault_name" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig.property.keyVaultName"></a>

```python
key_vault_name: str
```

- *Type:* str

Unique string that identifies the Azure Key Vault that contains your key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/encryption_at_rest#key_vault_name EncryptionAtRest#key_vault_name}

---

##### `require_private_networking`<sup>Optional</sup> <a name="require_private_networking" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig.property.requirePrivateNetworking"></a>

```python
require_private_networking: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Enable connection to your Azure Key Vault over private networking.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/encryption_at_rest#require_private_networking EncryptionAtRest#require_private_networking}

---

##### `resource_group_name`<sup>Optional</sup> <a name="resource_group_name" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Name of the Azure resource group that contains your Azure Key Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/encryption_at_rest#resource_group_name EncryptionAtRest#resource_group_name}

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig.property.secret"></a>

```python
secret: str
```

- *Type:* str

Private data that you need secured and that belongs to the specified Azure Key Vault (AKV) tenant (**azureKeyVault.tenantID**). This data can include any type of sensitive data such as passwords, database connection strings, API keys, and the like. AKV stores this information as encrypted binary data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/encryption_at_rest#secret EncryptionAtRest#secret}

---

##### `subscription_id`<sup>Optional</sup> <a name="subscription_id" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

Unique 36-hexadecimal character string that identifies your Azure subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/encryption_at_rest#subscription_id EncryptionAtRest#subscription_id}

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

Unique 36-hexadecimal character string that identifies the Azure Active Directory tenant within your Azure subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/encryption_at_rest#tenant_id EncryptionAtRest#tenant_id}

---

### EncryptionAtRestConfig <a name="EncryptionAtRestConfig" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import encryption_at_rest

encryptionAtRest.EncryptionAtRestConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  project_id: str,
  aws_kms_config: IResolvable | typing.List[EncryptionAtRestAwsKmsConfig] = None,
  azure_key_vault_config: IResolvable | typing.List[EncryptionAtRestAzureKeyVaultConfig] = None,
  enabled_for_search_nodes: bool | IResolvable = None,
  google_cloud_kms_config: IResolvable | typing.List[EncryptionAtRestGoogleCloudKmsConfig] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.projectId">project_id</a></code> | <code>str</code> | Unique 24-hexadecimal digit string that identifies your project. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.awsKmsConfig">aws_kms_config</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfig">EncryptionAtRestAwsKmsConfig</a>]</code> | aws_kms_config block. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.azureKeyVaultConfig">azure_key_vault_config</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig">EncryptionAtRestAzureKeyVaultConfig</a>]</code> | azure_key_vault_config block. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.enabledForSearchNodes">enabled_for_search_nodes</a></code> | <code>bool \| cdktf.IResolvable</code> | Flag that indicates whether Encryption at Rest for Dedicated Search Nodes is enabled in the specified project. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.googleCloudKmsConfig">google_cloud_kms_config</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfig">EncryptionAtRestGoogleCloudKmsConfig</a>]</code> | google_cloud_kms_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

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
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Unique 24-hexadecimal digit string that identifies your project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/encryption_at_rest#project_id EncryptionAtRest#project_id}

---

##### `aws_kms_config`<sup>Optional</sup> <a name="aws_kms_config" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.awsKmsConfig"></a>

```python
aws_kms_config: IResolvable | typing.List[EncryptionAtRestAwsKmsConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfig">EncryptionAtRestAwsKmsConfig</a>]

aws_kms_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/encryption_at_rest#aws_kms_config EncryptionAtRest#aws_kms_config}

---

##### `azure_key_vault_config`<sup>Optional</sup> <a name="azure_key_vault_config" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.azureKeyVaultConfig"></a>

```python
azure_key_vault_config: IResolvable | typing.List[EncryptionAtRestAzureKeyVaultConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig">EncryptionAtRestAzureKeyVaultConfig</a>]

azure_key_vault_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/encryption_at_rest#azure_key_vault_config EncryptionAtRest#azure_key_vault_config}

---

##### `enabled_for_search_nodes`<sup>Optional</sup> <a name="enabled_for_search_nodes" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.enabledForSearchNodes"></a>

```python
enabled_for_search_nodes: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Flag that indicates whether Encryption at Rest for Dedicated Search Nodes is enabled in the specified project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/encryption_at_rest#enabled_for_search_nodes EncryptionAtRest#enabled_for_search_nodes}

---

##### `google_cloud_kms_config`<sup>Optional</sup> <a name="google_cloud_kms_config" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.googleCloudKmsConfig"></a>

```python
google_cloud_kms_config: IResolvable | typing.List[EncryptionAtRestGoogleCloudKmsConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfig">EncryptionAtRestGoogleCloudKmsConfig</a>]

google_cloud_kms_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/encryption_at_rest#google_cloud_kms_config EncryptionAtRest#google_cloud_kms_config}

---

### EncryptionAtRestGoogleCloudKmsConfig <a name="EncryptionAtRestGoogleCloudKmsConfig" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import encryption_at_rest

encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfig(
  enabled: bool | IResolvable = None,
  key_version_resource_id: str = None,
  role_id: str = None,
  service_account_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfig.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Flag that indicates whether someone enabled encryption at rest for the specified  project. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfig.property.keyVersionResourceId">key_version_resource_id</a></code> | <code>str</code> | Resource path that displays the key version resource ID for your Google Cloud KMS. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfig.property.roleId">role_id</a></code> | <code>str</code> | Unique 24-hexadecimal digit string that identifies the Google Cloud Provider Access Role that MongoDB Cloud uses to access the Google Cloud KMS. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfig.property.serviceAccountKey">service_account_key</a></code> | <code>str</code> | JavaScript Object Notation (JSON) object that contains the Google Cloud Key Management Service (KMS). |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfig.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Flag that indicates whether someone enabled encryption at rest for the specified  project.

To disable encryption at rest using customer key management and remove the configuration details, pass only this parameter with a value of `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/encryption_at_rest#enabled EncryptionAtRest#enabled}

---

##### `key_version_resource_id`<sup>Optional</sup> <a name="key_version_resource_id" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfig.property.keyVersionResourceId"></a>

```python
key_version_resource_id: str
```

- *Type:* str

Resource path that displays the key version resource ID for your Google Cloud KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/encryption_at_rest#key_version_resource_id EncryptionAtRest#key_version_resource_id}

---

##### `role_id`<sup>Optional</sup> <a name="role_id" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfig.property.roleId"></a>

```python
role_id: str
```

- *Type:* str

Unique 24-hexadecimal digit string that identifies the Google Cloud Provider Access Role that MongoDB Cloud uses to access the Google Cloud KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/encryption_at_rest#role_id EncryptionAtRest#role_id}

---

##### `service_account_key`<sup>Optional</sup> <a name="service_account_key" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfig.property.serviceAccountKey"></a>

```python
service_account_key: str
```

- *Type:* str

JavaScript Object Notation (JSON) object that contains the Google Cloud Key Management Service (KMS).

Format the JSON as a string and not as an object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/encryption_at_rest#service_account_key EncryptionAtRest#service_account_key}

---

## Classes <a name="Classes" id="Classes"></a>

### EncryptionAtRestAwsKmsConfigList <a name="EncryptionAtRestAwsKmsConfigList" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import encryption_at_rest

encryptionAtRest.EncryptionAtRestAwsKmsConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EncryptionAtRestAwsKmsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfig">EncryptionAtRestAwsKmsConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EncryptionAtRestAwsKmsConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfig">EncryptionAtRestAwsKmsConfig</a>]

---


### EncryptionAtRestAwsKmsConfigOutputReference <a name="EncryptionAtRestAwsKmsConfigOutputReference" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import encryption_at_rest

encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

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
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.resetRequirePrivateNetworking">reset_require_private_networking</a></code> | *No description.* |
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

##### `reset_require_private_networking` <a name="reset_require_private_networking" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.resetRequirePrivateNetworking"></a>

```python
def reset_require_private_networking() -> None
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
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.valid">valid</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.accessKeyIdInput">access_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.customerMasterKeyIdInput">customer_master_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.requirePrivateNetworkingInput">require_private_networking_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.roleIdInput">role_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.secretAccessKeyInput">secret_access_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.accessKeyId">access_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.customerMasterKeyId">customer_master_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.requirePrivateNetworking">require_private_networking</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.roleId">role_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.secretAccessKey">secret_access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfig">EncryptionAtRestAwsKmsConfig</a></code> | *No description.* |

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

##### `valid`<sup>Required</sup> <a name="valid" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.valid"></a>

```python
valid: IResolvable
```

- *Type:* cdktf.IResolvable

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
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `require_private_networking_input`<sup>Optional</sup> <a name="require_private_networking_input" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.requirePrivateNetworkingInput"></a>

```python
require_private_networking_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

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
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `require_private_networking`<sup>Required</sup> <a name="require_private_networking" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.requirePrivateNetworking"></a>

```python
require_private_networking: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

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
internal_value: IResolvable | EncryptionAtRestAwsKmsConfig
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfig">EncryptionAtRestAwsKmsConfig</a>

---


### EncryptionAtRestAzureKeyVaultConfigList <a name="EncryptionAtRestAzureKeyVaultConfigList" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import encryption_at_rest

encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EncryptionAtRestAzureKeyVaultConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig">EncryptionAtRestAzureKeyVaultConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EncryptionAtRestAzureKeyVaultConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig">EncryptionAtRestAzureKeyVaultConfig</a>]

---


### EncryptionAtRestAzureKeyVaultConfigOutputReference <a name="EncryptionAtRestAzureKeyVaultConfigOutputReference" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import encryption_at_rest

encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

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
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.resetKeyIdentifier">reset_key_identifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.resetKeyVaultName">reset_key_vault_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.resetRequirePrivateNetworking">reset_require_private_networking</a></code> | *No description.* |
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

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_key_identifier` <a name="reset_key_identifier" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.resetKeyIdentifier"></a>

```python
def reset_key_identifier() -> None
```

##### `reset_key_vault_name` <a name="reset_key_vault_name" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.resetKeyVaultName"></a>

```python
def reset_key_vault_name() -> None
```

##### `reset_require_private_networking` <a name="reset_require_private_networking" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.resetRequirePrivateNetworking"></a>

```python
def reset_require_private_networking() -> None
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
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.valid">valid</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.azureEnvironmentInput">azure_environment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.keyIdentifierInput">key_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.keyVaultNameInput">key_vault_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.requirePrivateNetworkingInput">require_private_networking_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.secretInput">secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.subscriptionIdInput">subscription_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.tenantIdInput">tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.azureEnvironment">azure_environment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.keyIdentifier">key_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.keyVaultName">key_vault_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.requirePrivateNetworking">require_private_networking</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.secret">secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.subscriptionId">subscription_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig">EncryptionAtRestAzureKeyVaultConfig</a></code> | *No description.* |

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

##### `valid`<sup>Required</sup> <a name="valid" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.valid"></a>

```python
valid: IResolvable
```

- *Type:* cdktf.IResolvable

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
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

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

##### `require_private_networking_input`<sup>Optional</sup> <a name="require_private_networking_input" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.requirePrivateNetworkingInput"></a>

```python
require_private_networking_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

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
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

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

##### `require_private_networking`<sup>Required</sup> <a name="require_private_networking" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.requirePrivateNetworking"></a>

```python
require_private_networking: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

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
internal_value: IResolvable | EncryptionAtRestAzureKeyVaultConfig
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig">EncryptionAtRestAzureKeyVaultConfig</a>

---


### EncryptionAtRestGoogleCloudKmsConfigList <a name="EncryptionAtRestGoogleCloudKmsConfigList" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import encryption_at_rest

encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EncryptionAtRestGoogleCloudKmsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfig">EncryptionAtRestGoogleCloudKmsConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EncryptionAtRestGoogleCloudKmsConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfig">EncryptionAtRestGoogleCloudKmsConfig</a>]

---


### EncryptionAtRestGoogleCloudKmsConfigOutputReference <a name="EncryptionAtRestGoogleCloudKmsConfigOutputReference" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import encryption_at_rest

encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

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
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.resetRoleId">reset_role_id</a></code> | *No description.* |
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

##### `reset_role_id` <a name="reset_role_id" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.resetRoleId"></a>

```python
def reset_role_id() -> None
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
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.property.valid">valid</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.property.keyVersionResourceIdInput">key_version_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.property.roleIdInput">role_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.property.serviceAccountKeyInput">service_account_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.property.keyVersionResourceId">key_version_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.property.roleId">role_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.property.serviceAccountKey">service_account_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfig">EncryptionAtRestGoogleCloudKmsConfig</a></code> | *No description.* |

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

##### `valid`<sup>Required</sup> <a name="valid" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.property.valid"></a>

```python
valid: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `key_version_resource_id_input`<sup>Optional</sup> <a name="key_version_resource_id_input" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.property.keyVersionResourceIdInput"></a>

```python
key_version_resource_id_input: str
```

- *Type:* str

---

##### `role_id_input`<sup>Optional</sup> <a name="role_id_input" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.property.roleIdInput"></a>

```python
role_id_input: str
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
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `key_version_resource_id`<sup>Required</sup> <a name="key_version_resource_id" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.property.keyVersionResourceId"></a>

```python
key_version_resource_id: str
```

- *Type:* str

---

##### `role_id`<sup>Required</sup> <a name="role_id" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.property.roleId"></a>

```python
role_id: str
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
internal_value: IResolvable | EncryptionAtRestGoogleCloudKmsConfig
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfig">EncryptionAtRestGoogleCloudKmsConfig</a>

---



